import './globals.css';

export const metadata = {
  title: 'Flash Clicks | Premium Photography Studio',
  description: 'High-end photography for portrait, fashion, and cinematic moments. Based in the heart of the city.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
