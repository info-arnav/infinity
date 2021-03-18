import { signIn, signOut, useSession, Provider } from "next-auth/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import "../styles/globals.scss";
import { loadProgressBar } from "axios-progress-bar";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Footer from "../components/Footer";
import Head from "next/head";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
NProgress.configure({ showSpinner: false });
loadProgressBar();
Router.events.on("routeChangeError", () => NProgress.done());
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "http://www.arnavgupta.net",
              logo: "http://www.arnavgupta.net/logo.png",
            }),
          }}
        ></script>
        <link
          rel="icon"
          href={"/favicon.ico"}
          alt="The logo of the website which showcases a symbol of infinity combined to wires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href={"/logo.webp"} />
        <link rel="manifest" href={"/manifest.json"} />
        <meta property="og:url" content="https://www.arnavgupta.net/" />
        <meta
          property="og:image"
          content={"https://www.arnavgupta.net/logo.webp"}
          alt="The logo of the website which showcases a symbol of infinity combined to wires"
        />
        <meta property="og:site_name" content={"Infinity"} />
        <meta property="fb:app_id" content="478626783320499" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary" key="twitterc" />
        <meta name="twitter:site" content="@infinity" />
        <meta
          key="twitteri"
          name="twitter:image"
          content={"https://www.arnavgupta.net/logo.webp"}
          alt="The logo of the website which showcases a symbol of infinity combined to wires"
        />
        <meta
          key="twitteria"
          name="twitter:image:alt"
          content="The logo of the website which showcases a symbol of infinity combined to wires"
        />
      </Head>

      <Provider session={pageProps.session}>
        <Navigation></Navigation>
        <main>
          <Component {...pageProps} />
        </main>{" "}
        {""}
        {}
        <Footer></Footer>
      </Provider>
    </>
  );
}
