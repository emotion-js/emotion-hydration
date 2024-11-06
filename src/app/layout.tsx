import type { Metadata } from "next";
import "./globals.css";
import { RegularProviders, WithCacheProviders } from "./providers";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <RegularProviders>
          {children}
        </RegularProviders> */}
        <WithCacheProviders>
          {children}
        </WithCacheProviders>
      </body>
    </html>
  );
}
