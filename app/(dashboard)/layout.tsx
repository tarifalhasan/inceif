import DashboardHeader from "@/components/dashboard/Header";
import { inter } from "@/utils/Fonts";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-skin-blue-50 ${inter.className} `}>
        <DashboardHeader />
        {children}
      </body>
    </html>
  );
}
