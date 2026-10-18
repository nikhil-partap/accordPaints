import { Check } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast-in fixed bottom-5 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-[15px] text-white shadow-2xl"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
        <Check className="h-3.5 w-3.5" />
      </span>
      <span>{message}</span>
    </div>
  );
}
