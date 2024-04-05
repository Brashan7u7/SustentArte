import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/components/navbar/navbar.jsx"
import Footer from "@/components/footer/footer.jsx"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SustentArte",
  description: "SustentArte Co.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
