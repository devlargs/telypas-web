import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useQuery } from '@apollo/client';
import { StreamChat, type Event } from 'stream-chat';
import { StreamChatTokenQuery } from '../../graphql/queries';

interface ChatContextValue {
  client: StreamChat | null;
  userId: string | null;
  unreadCount: number;
}

const ChatContext = createContext<ChatContextValue>({
  client: null,
  userId: null,
  unreadCount: 0,
});

export function useChat(): ChatContextValue {
  return useContext(ChatContext);
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery(StreamChatTokenQuery);
  const [client, setClient] = useState<StreamChat | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);

  const token = data?.streamChatToken;

  useEffect(() => {
    if (!token) return;
    const chatClient = StreamChat.getInstance(token.apiKey);
    let cancelled = false;

    chatClient
      .connectUser({ id: token.userId }, token.token)
      .then((result) => {
        if (cancelled) return;
        setClient(chatClient);
        const me = result?.me;
        if (me && typeof me.total_unread_count === 'number') {
          setUnreadCount(me.total_unread_count);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) console.error('Stream connect failed', err);
      });

    const handleUnread = (event: Event) => {
      if (typeof event.total_unread_count === 'number') {
        setUnreadCount(event.total_unread_count);
      }
    };
    chatClient.on(handleUnread);

    return () => {
      cancelled = true;
      chatClient.off(handleUnread);
      setClient(null);
      void chatClient.disconnectUser();
    };
  }, [token]);

  return (
    <ChatContext.Provider value={{ client, userId: token?.userId ?? null, unreadCount }}>
      {children}
    </ChatContext.Provider>
  );
}
