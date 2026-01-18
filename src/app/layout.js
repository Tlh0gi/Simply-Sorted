import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simply Sorted - Professional Organizing & Home Staging',
  description: 'Professional organizing and home staging services in Randburg, Gauteng. Creating calm, functional, and beautifully presented spaces.',
  icons: {
    icon: "images/logo.png", 
  },
  keywords: [
    'professional organizing Randburg',
    'home staging Gauteng',
    'decluttering services South Africa',
    'professional organizer Randburg',
    'downsizing support Gauteng',
    'home organization Randburg',
    'life transition support',
    'moving assistance Randburg',
    'home staging for selling',
    'closet organization',
    'kitchen organization',
    'office organizing',
    'CPO South Africa',
    'certified professional organizer',
    'Simply Sorted',
    'organizing services near me',
    'home organizer Gauteng',
    'declutter my home',
    'professional staging'
  ],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 