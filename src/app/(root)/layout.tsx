import { Client } from "appwrite";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66ba161400001a2db69d");

  return (
    <div>
      <h1>hi there </h1>
      {children}
    </div>
  );
}
