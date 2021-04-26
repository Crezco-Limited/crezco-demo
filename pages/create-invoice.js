import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Input from "@/components/input";
import Loading from "@/components/loading";
import getUserProps from "@/lib/get-user-props";
import createPayDemand from "@/lib/create-pay-demand";

export async function getServerSideProps({ query }) {
  return await getUserProps(query);
}

export default function CreateInvoice({ user, error }) {
  const router = useRouter();
  const [amount, setAmount] = useState();
  const [reference, setReference] = useState();
  const [loading, setLoading] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    createPayDemand(user.id, amount, reference).then((id) => {
      router.push(`/invoice/${id}`);
    });
  }

  return (
    <Layout tile="Create invoice">
      <Loading show={loading} />
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
          required="required"
        />
        <Input
          label="Enter your reference"
          name="reference"
          placeholder="REF-123"
          onChange={(e) => setReference(e.target.value)}
          onBlur={(e) => setReference(e.target.value)}
          required="required"
        />
        <Button type="submit">Create payment link</Button>
      </form>
    </Layout>
  );
}
