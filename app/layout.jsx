import "../styles/globals.css";

export const metadata = {
  title: "NextJS 14 Youtube Course",
  description: "NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
