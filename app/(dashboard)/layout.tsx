import DashboardHeader from "@/components/dashboard/Header";
import { inter } from "@/utils/Fonts";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`bg-skin-blue-50 ${inter.className} h-full `}>
        <DashboardHeader />
        {children}
      </body>
    </html>
  );
}
