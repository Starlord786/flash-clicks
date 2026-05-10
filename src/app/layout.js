import './globals.css';
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic']
});
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-curly',
});

export const metadata = {
  title: 'FlashClicks | Premium Photography',
  description: 'Capturing Moments, Creating Stories. High-end photography portfolio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} dark`}>
      <body className="font-sans antialiased selection:bg-[#c9a063] selection:text-white transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
