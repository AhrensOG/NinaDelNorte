import { RobotoFont } from "@/fonts";
import "./globals.css";

export const metadata = {
  title: "Nina Del Norte",
  description: "Created By GrupoStart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RobotoFont.className}>{children}</body>
    </html>
  );
}
