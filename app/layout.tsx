import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Facebook",
  description: "Teste",
};

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-page-background`}>
        {/* <Script
          id="facebook-login"
          dangerouslySetInnerHTML={{
            __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId      : 'YOUR_APP_ID',
                    cookie     : true,
                    xfbml      : true,
                    version    : 'v14.0'
                  });
                };
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) {return;}
                  js = d.createElement(s); js.id = id;
                  js.src = "https://connect.facebook.net/en_US/sdk.js";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `,
          }}
        /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
