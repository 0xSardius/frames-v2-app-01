import type { Metadata } from "next";

import "../app/globals.css";
import { Providers } from "../app/providers";

export const metadata: Metadata = {
  title: "Farcaster Frames v2 Based app",
  description: "A Farcaster Frames v2 based app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
