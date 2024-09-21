import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Layout } from "@/components/layout";
import { muiTheme } from "@/features/theme";
import { StarknetProvider } from "@/blockchain";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Token Transfer",
  description: "Sample Dapp using Next.js and Cairo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <StarknetProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={muiTheme}>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
