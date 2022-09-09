import Layout from '~components/Layout';
import TabBar from '~components/TabBar';
import Welcome from '~components/Welcome';
import '../styles/globals.css';
import '../styles/sakura.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'yet-another-react-lightbox/styles.css';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="sakura-wrapper fixed h-screen w-full z-50 overflow-x-hidden pointer-events-none" />
      <Layout>
        <Component {...pageProps} />
        <TabBar />
        <Welcome />
      </Layout>
    </>
  );
}

export default MyApp;
