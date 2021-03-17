import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import { Jumbotron } from "react-bootstrap";
import Image from "next/image";

export default function Page() {
  const [session, loading] = useSession();
  const router = useRouter();
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
              url: "https://www.arnavgupta.net/auth/verify-request",
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
        <title>Infinity | Verification</title>
        <meta property="og:title" content="Infinity | Verification" />
        <meta name="twitter:title" content="Infinity | Verification" />
        <meta
          name="description"
          content="An Email has been sent to your mail Id. Please check your mailbox.
"
        />
        <meta
          property="og:description"
          content="An Email has been sent to your mail Id. Please check your mailbox.
"
        />
        <meta
          name="twitter:description"
          content="An Email has been sent to your mail Id. Please check your mailbox.
"
        />
      </Head>
      <Jumbotron fluid style={{ backgroundColor: "white" }}>
        <center>
          <Image src="/mail.svg" width={100} height={200}></Image>
          <h5>
            An Email has been sent to the given mail id please click the link
            there to verify.{" "}
          </h5>{" "}
          <br></br>
          <p>
            Having issues ?{" "}
            <Link href="signin" style={{ display: "inline" }}>
              Click here.
            </Link>
          </p>
        </center>
      </Jumbotron>
    </>
  );
}
