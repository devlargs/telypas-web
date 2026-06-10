type AuthEvent = 'unauthenticated';
type Listener = () => void;

const listeners = new Map<AuthEvent, Set<Listener>>();

export const authEvents = {
  on(event: AuthEvent, listener: Listener): () => void {
    let set = listeners.get(event);
    if (!set) {
      set = new Set();
      listeners.set(event, set);
    }
    set.add(listener);
    return () => set.delete(listener);
  },
  emit(event: AuthEvent): void {
    listeners.get(event)?.forEach((listener) => listener());
  },
};
