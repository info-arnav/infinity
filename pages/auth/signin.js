import { providers, signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const [session, loading] = useSession();
  const router = useRouter();
  return (
    <>
      {!session &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      {session && router.push("/dashboard")}
    </>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};
