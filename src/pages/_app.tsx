import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Geist from "next/font/local";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";

const geist = Geist({
  src: [
    { path: "./fonts/Geist-Thin.woff2", weight: "100" },
    { path: "./fonts/Geist-Ultralight.woff2", weight: "200" },
    { path: "./fonts/Geist-Light.woff2", weight: "300" },
    { path: "./fonts/Geist-Regular.woff2", weight: "400" },
    { path: "./fonts/Geist-Medium.woff2", weight: "500" },
    { path: "./fonts/Geist-Semibold.woff2", weight: "600" },
    { path: "./fonts/Geist-Bold.woff2", weight: "700" },
    { path: "./fonts/Geist-Black.woff2", weight: "800" },
    { path: "./fonts/Geist-UltraBlack.woff2", weight: "900" },
  ],
  display: "swap",
  variable: "--font-geist-sans",
  // fallback: ["inter"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className={`${geist.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider>
  );
}
