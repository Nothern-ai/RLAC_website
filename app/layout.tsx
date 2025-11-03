import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RLAC: Reinforcement Learning with Adversarial Critic',
  description: 'Adversarial critic framework for free-form generation tasks.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
