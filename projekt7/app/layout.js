import "./globals.css";
import MainHeader from "../components/main-header";

export const metadata = {
  title: "AYH - GreenLevel Food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
