import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";

const errorProps = {
  error: "User could not be found",
  user: {
    firstName: "Stranger",
    lastName: "McStrangerFace",
    displayName: "Stranger",
    eMail: "name@email.com",
  },
};

export async function getServerSideProps({ query }) {
  if (query["user-id"] === undefined) {
    return {
      props: errorProps,
    };
  }

  const payload = await fetch(
    `https://api.sandbox.crezco.com/v1/users/${query["user-id"]}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Crezco-Key": process.env.CREZCO_API_KEY,
      },
    }
  );

  if (payload.status !== 200) {
    return {
      props: errorProps,
    };
  }

  const user = await payload.json();

  return {
    props: {
      user,
    },
  };
}

export default function CreateInvoice({ user, error }) {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-50 to-gray-50">
      <Head>
        <title>Create invoice - Crezco demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <div className="border rounded-lg max-w-lg">
          <Header />
          <div className="p-8 bg-white rounded-b-lg">
            <p className="text-lg">Hello {user.displayName}</p>
            {error && (
              <p className="text-lg text-red-500 mt-4 bg-red-50 p-1">
                User details could not be found
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
