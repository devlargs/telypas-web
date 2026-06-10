import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useChat } from './ChatProvider';
import { useToast } from '../../components/Toast/ToastContext';

export function useStartDM() {
  const { client, userId } = useChat();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [starting, setStarting] = useState(false);

  async function startDM(otherUserId: string) {
    if (!client || !userId) {
      toast('Chat is still connecting — try again in a moment.');
      return;
    }
    setStarting(true);
    try {
      // No channel id: Stream creates/reuses the distinct 1:1 channel for this member pair.
      const channel = client.channel('messaging', { members: [userId, otherUserId] });
      await channel.create();
      navigate(`/messages?channel=${encodeURIComponent(channel.cid ?? '')}`);
    } catch {
      toast('Could not open this conversation. Try again.', 'error');
    } finally {
      setStarting(false);
    }
  }

  return { startDM, starting, chatReady: client !== null };
}
