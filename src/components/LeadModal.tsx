import { useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'https://functions.poehali.dev/c3d7e302-cabb-4761-b372-1d3bd0dc0f4b';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [context, setContext] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, context }),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    setName('');
    setContext('');
    setConsent(false);
    setStatus('idle');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md border border-white/10 bg-black p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'done' ? (
          <div className="text-center">
            <p className="mb-2 text-2xl font-light text-white">Message sent.</p>
            <p className="mb-8 text-base font-light text-white/40">I'll get back to you shortly.</p>
            <button
              onClick={handleClose}
              className="text-sm font-light uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/30">
                  Get in touch
                </p>
                <p className="text-2xl font-light text-white">Let's talk.</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/30 transition-colors hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/30">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-base font-light text-white placeholder-white/20 outline-none transition-colors focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/30">
                  Context
                </label>
                <textarea
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows={4}
                  placeholder="Tell me briefly about your situation or initiative"
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-base font-light text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 shrink-0 accent-white"
                />
                <span className="text-xs font-light leading-relaxed text-white/35">
                  I consent to the processing of my personal data in accordance with the{' '}
                  <Link
                    to="/privacy"
                    target="_blank"
                    className="underline underline-offset-2 text-white/50 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {status === 'error' && (
                <p className="text-sm text-red-400/80">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !consent}
                className="w-full border border-white/20 py-3 text-sm font-light uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}