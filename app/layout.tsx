import MainNav from "../components/MainNav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="w-44">
          <MainNav />
        </div>
        <div className="ml-44">{children}</div>
      </body>
    </html>
  );
}
