import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <script id="sakura-script" src="/script/sakura.js" defer />
        <title>Wedding of Iyan {'&'} Isty 💜</title>
        <Script
          id="sakura-start"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.sakura = new Sakura('.sakura-wrapper');
        `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <title>Wedding of Iyan & Isty 💜</title>
        <meta name="title" content="Wedding of Iyan & Isty 💜" />
        <meta name="description" content="We are getting married 💜" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Wedding of Iyan & Isty 💜" />
        <meta property="og:description" content="We are getting married 💜" />
        <meta property="og:image" content="https://ik.imagekit.io/iyansr/3_OjEKW-9Zs.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Wedding of Iyan & Isty 💜" />
        <meta property="twitter:description" content="We are getting married 💜" />
        <meta property="twitter:image" content="https://ik.imagekit.io/iyansr/3_OjEKW-9Zs.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-portal" className="overflow-hidden" />
        <div id="modal-portal-1" className="overflow-hidden" />
      </body>
    </Html>
  );
}
