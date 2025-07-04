import type { Metadata } from "next";
import ThemeWrapper from "./components/ThemeWrapper";
import { cookies } from "next/headers";
import { Fade } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme')?.value ?? 'light';
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!


  return (
    <html lang="en">
      <body>

        <GoogleOAuthProvider clientId={googleClientId}>
        <ThemeWrapper initialTheme = {themeCookie}>
          {children}
        </ThemeWrapper>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
