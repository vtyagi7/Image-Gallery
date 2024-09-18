import "./globals.css";

export const metadata = {
  title: "Visual Vault",
  description: "Image display website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
