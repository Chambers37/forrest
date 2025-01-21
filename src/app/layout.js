import Navbar from "../components/Navbar"
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
        <main>{children}</main>
      </body>
    </html>
  );
}
