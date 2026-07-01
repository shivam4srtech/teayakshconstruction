import dynamic from 'next/dynamic';

export const Motion = dynamic(
  () => import('framer-motion').then((mod) => ({ default: mod.motion })),
  { ssr: false }
);

export const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => ({ default: mod.AnimatePresence })),
  { ssr: false }
);
