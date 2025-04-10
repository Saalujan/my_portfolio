import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const outfit = Outfit({
  subsets: ["latin"],weight: [ "400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight: [ "400"]
});



export const metadata = {
  title: "Saalu-Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ovo.className} ${outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
