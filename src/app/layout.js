import Navbar from "../components/Navbar"
import Footer from "@/components/footer";
import '../styles/globals.css';

export const metadata = {
  title: 'Forrest Hardscape and Landscape',
  description: 'Professional Hardscape and Landscape Services'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[90px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
