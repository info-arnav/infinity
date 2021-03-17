import { providers, signIn, useSession, csrfToken } from "next-auth/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

export default function SignIn({ csrfToken }) {
  const [session, loading] = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  });
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              colleague: [],
              image: "https://www.arnavgupta.net/logo.webp",
              name: "Arnav Gupta",
              url: "https://www.arnavgupta.net/auth/email-signin",
              sameAs: [
                "https://www.youtube.com/channel/UCzzfqCy-j9XZA5KNosqzh6w",
                "https://www.instagram.com/infinity.newtech/",
                "https://www.linkedin.com/in/arnav-gupta-0922341a9/",
                "https://www.facebook.com/infinity.newTechnology",
                "https://twitter.com/infinityNewTech",
              ],
            }),
          }}
        />
        <title>Infinity | Register</title>
        <meta property="og:title" content="Infinity | Register" />
        <meta name="twitter:title" content="Infinity | Register" />
        <meta
          name="description"
          content="You can register/login using your email id here using an OTP.
"
        />
        <meta
          property="og:description"
          content="You can register/login using your email id here using an OTP.
"
        />
        <meta
          name="twitter:description"
          content="You can register/login using your email id here using an OTP.
"
        />
      </Head>
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <input type="text" id="email" name="email" />
        </label>
        <button type="submit">Sign in with Email</button>
      </form>
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  };
};
