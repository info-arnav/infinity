import { providers, signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function SignIn({ providers }) {
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
              url: "https://www.arnavgupta.net/auth/signin",
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
        <title>Infinity | Log In</title>
        <meta property="og:title" content="Infinity | Log In" />
        <meta name="twitter:title" content="Infinity | Log In" />
        <meta
          name="description"
          content="Use various services like Google to logn here.
"
        />
        <meta
          property="og:description"
          content="Use various services like Google to logn here.
"
        />
        <meta
          name="twitter:description"
          content="Use various services like Google to logn here.
"
        />
      </Head>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          {provider.name == "Email" && (
            <Link href="email-signin">Register with Email</Link>
          )}
          {provider.name != "Email" && (
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          )}
        </div>
      ))}
    </>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};
