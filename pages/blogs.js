import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const [session, loading] = useSession();
  const router = useRouter();
  return (
    <>
      {!session && router.push("/")}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
