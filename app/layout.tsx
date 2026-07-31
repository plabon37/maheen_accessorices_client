import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Maheen Accessories",
  description: "Maheen Accessories Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}