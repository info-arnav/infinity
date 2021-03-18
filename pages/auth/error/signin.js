import { providers, signIn, useSession, csrfToken } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function SignIn({ providers, csrfToken }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
        <title>Infinity | Log In Error</title>
        <meta property="og:title" content="Infinity | Log In Error" />
        <meta name="twitter:title" content="Infinity | Log In Error" />
        <meta
          name="description"
          content="Maybe you used some other service to login or register the last time, so please use th eappropriate service.
"
        />
        <meta
          property="og:description"
          content="Maybe you used some other service to login or register the last time, so please use th eappropriate service.
"
        />
        <meta
          name="twitter:description"
          content="Maybe you used some other service to login or register the last time, so please use th eappropriate service.
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
          <center>
            <br></br>
            <h2>Welcome</h2>
            <br></br>
            <p>
              Login or Register her to access all features offered by infinity
            </p>
            <p style={{ color: "red" }}>
              Wrong service chosen. Try the servce which you used during
              registeration.
            </p>
            <br></br>
          </center>
          <Form
            method="post"
            action="/api/auth/signin/email"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                required
                placeholder="name@example.com"
              />
            </Form.Group>
            <Button style={{ width: "100%" }} type="submit">
              Send Link
            </Button>
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
