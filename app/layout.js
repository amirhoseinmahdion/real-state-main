import "./globals.css";
import { fontYek } from "@/utils/fonts";
import Layout from "@/layout/Layout";
import NextauthProvider from "@/providers/NextauthProvider";


export const metadata ={
  title:"املاک | پروژه مهدیون",
  description:"سایت خرید و فروش ملک",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={fontYek.className}>
        <NextauthProvider>
          <Layout>{children} </Layout>
        </NextauthProvider>
      </body>
    </html>
  );
}
