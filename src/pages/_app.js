import Layout from '~components/Layout';
import TabBar from '~components/TabBar';
import '../styles/globals.css';
import '../styles/sakura.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="sakura-wrapper fixed h-screen w-screen z-50" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <TabBar />
    </>
  );
}

export default MyApp;
