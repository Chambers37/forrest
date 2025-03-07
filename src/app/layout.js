import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/globals.css';


export const metadata = {
  title: 'Forrest Hardscape and Landscape',
  description: 'Professional Hardscape and Landscape Services'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[90px]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
