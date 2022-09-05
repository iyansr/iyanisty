import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script id="sakura-script" src="/script/sakura.js" strategy="afterInteractive" />
        <Script
          id="sakura-start"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.sakura = new Sakura('.sakura-wrapper');
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
