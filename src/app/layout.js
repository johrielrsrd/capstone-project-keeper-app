import "../../public/globals.css";

import { League_Spartan } from "next/font/google";

const league = League_Spartan({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Keeper App",
  description: "Capstone project by John Johriel Rosarda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={league.className}>
      <body>{children}</body>
    </html>
  );
}
