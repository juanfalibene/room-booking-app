import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Bookit App | Book a Meeting Room",
  description: "Book a meeting room with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen`}
      >
        <Header />
        <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
