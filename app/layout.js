import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail/MouseTrail";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-black/95 min-h-screen flex flex-col'>
        <MouseTrail />
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
