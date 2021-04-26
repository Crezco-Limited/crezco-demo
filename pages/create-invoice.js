import { useState } from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Input from "@/components/input";
import getUserProps from "@/lib/get-user-props";

export async function getServerSideProps({ query }) {
  return await getUserProps(query);
}

export default function CreateInvoice({ user, error }) {
  const [amount, setAmount] = useState();
  const [reference, setReference] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-50 to-gray-50">
      <Head>
        <title>Create invoice - Crezco demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <div className="border rounded-lg max-w-lg">
          <Header />
          <form className="p-8 bg-white rounded-b-lg" onSubmit={handleSubmit}>
            <p className="text-lg font-medium">Hello {user.displayName}</p>
            {error && (
              <p className="text-lg text-red-500 mt-4 bg-red-50 p-1">
                User details could not be found
              </p>
            )}

            <Input
              label="Enter your amount"
              name="amount"
              type="number"
              placeholder={100}
              prefix="&pound;"
              onChange={(e) => setAmount(e.target.value)}
              onBlur={(e) => setAmount(e.target.value)}
            />
            <Input
              label="Enter your reference"
              name="reference"
              placeholder="REF-123"
              onChange={(e) => setReference(e.target.value)}
              onBlur={(e) => setReference(e.target.value)}
            />
            <Button type="submit">Create payment link</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
