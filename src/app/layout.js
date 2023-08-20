import PoppinsFont from "@/utils/PoppinsFont";
import "./globals.css";

export const metadata = {
  title: "TEDx GEC RIT",
  description: "TEDx GEC RIT event at RIT Kottayam, Kerala, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PoppinsFont />
      <body className="selection:bg-red selection:text-white">{children}</body>
    </html>
  );
}
