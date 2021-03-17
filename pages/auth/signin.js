import { providers, signIn, useSession, csrfToken } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function SignIn({ providers, context }) {
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
          content="Use various services like Google to logn here or simply use your email to get a otp and login.
"
        />
        <meta
          property="og:description"
          content="Use various services like Google to logn here or simply use your email to get a otp and login.
"
        />
        <meta
          name="twitter:description"
          content="Use various services like Google to logn here or simply use your email to get a otp and login.
"
        />
      </Head>
      <Row
        style={{
          margin: "0px",
          width: "calc(100% - 30px)",
          marginLeft: "15px",
        }}
      >
        <Col
          md={6}
          style={{
            height: "700px",
            backgroundImage: "url(/bg.webp)",
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
        ></Col>
        <Col md={6} style={{ borderRadius: "20px" }}>
          <br></br>
          <h2>Welcome</h2>
          <br></br>
          <p>
            Login or Register her to access all features offered by infinity
          </p>
          <br></br>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Button>Send Link</Button>
          </Form>
          <br></br>
          <center>
            <h6>OR</h6>
          </center>
          <br></br>
          <center>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                {provider.name != "Email" && (
                  <button
                    id={"data"}
                    style={{ marginBottom: "5px" }}
                    className="btn btn-4 btn-4c icon-arrow-right"
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in with {provider.name}
                  </button>
                )}
              </div>
            ))}
          </center>
        </Col>
      </Row>
      <br></br>
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(),
    csrfToken: await csrfToken(context),
  };
};
