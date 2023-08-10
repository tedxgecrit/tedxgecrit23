import PoppinsFont from "@/utils/PoppinsFont";
import "./globals.css";

export const metadata = {
  title: "TEDxGECRIT",
  description: "TEDxGECRIT event at RIT Kottayam, Kerala, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PoppinsFont />
      <body>{children}</body>
    </html>
  );
}
