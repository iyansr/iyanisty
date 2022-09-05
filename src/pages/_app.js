import Layout from '~components/Layout';
import TabBar from '~components/TabBar';
import '../styles/globals.css';
import '../styles/sakura.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="sakura-wrapper fixed h-screen w-full z-[2] overflow-x-hidden pointer-events-none" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <TabBar />
    </>
  );
}

export default MyApp;
