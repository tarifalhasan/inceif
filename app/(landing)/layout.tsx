import { gilroy, inter, open_sans, playfair, poppins } from "@/utils/Fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} h-full ${poppins.variable} ${open_sans.variable} ${playfair.variable} ${gilroy.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
