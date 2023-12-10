import { headers } from "next/headers";

export default async function Users() {
  const headersList = headers();

  const hostname = headersList.get("host"); // to get domain

  return (
    <>
      <h1>Hello {hostname}</h1>
    </>
  );
}
