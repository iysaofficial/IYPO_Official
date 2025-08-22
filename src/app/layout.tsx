import GalleryComp from '@/components/GalleryComp';
import NavbarComp from '@/components/NavbarComp';
import FooterComp from '@/components/FooterComp';
import { ReactNode } from 'react';

export const metadata = {
  title: 'IYPO Official'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS (CDN) */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P8BS6XQCQ1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P8BS6XQCQ1');
            `,
          }}
        />
      </head>
      <body>
        <NavbarComp />
        {children}
        <br />
        <br />
        <br />
        {/* <GalleryComp/> */}
        <br />
        <br />
        <br />
        <FooterComp />
      </body>
    </html>
  );
}
