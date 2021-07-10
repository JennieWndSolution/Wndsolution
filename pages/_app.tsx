import Layout from "../components/layout";
import "../styles/globals.scss";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  console.log(appProps);

  return { ...appProps };
};

export default MyApp;
