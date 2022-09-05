import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <script id="sakura-script" src="/script/sakura.js" defer />
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
