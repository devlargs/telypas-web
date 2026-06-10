import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  ChannelPreviewMessenger,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChatContext,
  type ChannelPreviewUIComponentProps,
} from 'stream-chat-react';
import { useChat } from '../features/chat/ChatProvider';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { Skeleton } from '../components/Skeleton/Skeleton';
import 'stream-chat-react/dist/css/v2/index.css';
import '../styles/chat-theme.css';
import styles from './MessagesPage.module.css';

function ChannelPreview(props: ChannelPreviewUIComponentProps) {
  const [, setSearchParams] = useSearchParams();
  return (
    <ChannelPreviewMessenger
      {...props}
      onSelect={() => {
        if (props.channel.cid) {
          setSearchParams({ channel: props.channel.cid });
        }
      }}
    />
  );
}

/** Keeps the active Stream channel in sync with the ?channel= URL param. */
function ActiveChannelFromUrl() {
  const [searchParams] = useSearchParams();
  const cid = searchParams.get('channel');
  const { client, setActiveChannel } = useChatContext();

  useEffect(() => {
    if (!cid) {
      setActiveChannel(undefined);
      return;
    }
    const separator = cid.indexOf(':');
    if (separator === -1) return;
    const channel = client.channel(cid.slice(0, separator), cid.slice(separator + 1));
    let cancelled = false;
    channel
      .watch()
      .then(() => {
        if (!cancelled) setActiveChannel(channel);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [cid, client, setActiveChannel]);

  return null;
}

function MessagesInner({ userId }: { userId: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const hasActive = searchParams.has('channel');
  const { channel } = useChatContext();

  return (
    <div className={`${styles.layout} ${hasActive ? styles.channelOpen : ''}`}>
      <ActiveChannelFromUrl />
      <aside className={styles.listPane} aria-label="Conversations">
        <h1 className={styles.paneTitle}>Messages</h1>
        <ChannelList
          filters={{ type: 'messaging', members: { $in: [userId] } }}
          sort={{ last_message_at: -1 }}
          options={{ state: true, watch: true, presence: true }}
          Preview={ChannelPreview}
        />
      </aside>
      <section className={styles.channelPane}>
        {channel ? (
          <>
            <button type="button" className={styles.backButton} onClick={() => setSearchParams({})}>
              ← All conversations
            </button>
            <Channel>
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput focus />
              </Window>
              <Thread />
            </Channel>
          </>
        ) : (
          <div className={styles.noChannel}>
            <EmptyState
              headline="Pick a conversation."
              detail="Choose a thread on the left, or start one from a connection's profile."
            />
          </div>
        )}
      </section>
    </div>
  );
}

export function MessagesPage() {
  const { client, userId } = useChat();

  if (!client || !userId) {
    return (
      <div className={styles.connecting} aria-busy="true" aria-label="Connecting to chat">
        <div className={styles.connectingList}>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className={styles.connectingRow}>
              <Skeleton width="44px" height="44px" radius="6px" />
              <div className={styles.connectingLines}>
                <Skeleton width="50%" height="1rem" />
                <Skeleton width="80%" height="0.85rem" />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.connectingMain}>
          <Skeleton width="40%" height="1.4rem" />
          <Skeleton width="100%" height="240px" radius="6px" />
        </div>
      </div>
    );
  }

  return (
    <Chat client={client}>
      <MessagesInner userId={userId} />
    </Chat>
  );
}
