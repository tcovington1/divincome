import Link from "next/link";
import { useGetCurrentUserQuery } from "../client/graphql/getCurrentUser.generated";

function Homepage() {
  const [{ data }] = useGetCurrentUserQuery();

  return (
    <>
      <h1>DivIncome</h1>
      <h2>Helping investors easily track their dividend income in one place.</h2>
      {!data?.currentUser ? (
        <>
          <Link href="/get-started">Get started</Link>
          <Link href="/login">Login</Link>
        </>
      ) : (
        <Link href="/app">Go to dashboard</Link>
      )}
    </>
  );
}

export default Homepage;
