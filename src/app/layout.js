import "../../public/globals.css";

export const metadata = {
  title: "Keeper App",
  description: "Capstone project by John Johriel Rosarda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
