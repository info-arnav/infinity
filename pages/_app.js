import { signIn, signOut, useSession, Provider } from "next-auth/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Navigation></Navigation>
        <main>
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}
