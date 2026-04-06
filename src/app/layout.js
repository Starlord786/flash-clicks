import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  style: ['normal', 'italic'] 
});

export const metadata = {
  title: 'FlashClicks | Premium Photography',
  description: 'Capturing Moments, Creating Stories. High-end photography portfolio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#f8f6f0] text-[#1a1a1a] selection:bg-[#c9a063] selection:text-white">
        {children}
      </body>
    </html>
  );
}
