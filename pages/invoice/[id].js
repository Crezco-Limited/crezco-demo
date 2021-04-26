import { useEffect, useState } from "react";
import Head from "next/head";
import { QRCode } from "react-qr-svg";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import getPayDemandAsProps from "@/lib/get-pay-demand";
import Pusher from "pusher-js";

export async function getServerSideProps({ query }) {
  return await getPayDemandAsProps(query.id);
}

export default function Invoice({ demand, error }) {
  const [paid, setPaid] = useState();
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_API_KEY, {
    cluster: "eu",
  });

  useEffect(() => {
    // Subscribe to channel for this payDemandId
    const channel = pusher.subscribe(`payments-${demand.payDemandId}`);
    channel.bind("PaymentCompleted", (data) => {
      setPaid(true);
    });
    return () => {
      // Unsubscribe when component unmounts
      pusher.unsubscribe(`payments-${demand.payDemandId}`);
    };
  }, []);

  return (
    <Layout title="Invoice details">
      <div className="p-8 bg-white rounded-b-lg">
        <p className="text-lg font-medium mb-4">
          Your invoice is ready to share
        </p>
        {paid && (
          <p className="inline-block font-medium text-lg mb-4 p-4 rounded bg-green-100 text-green-500 border border-green-500">
            This invoice has been paid
          </p>
        )}
        {!paid && (
          <p className="inline-block font-medium text-lg mb-4 p-4 rounded bg-yellow-100 text-yellow-500 border border-yellow-500">
            Payment pending
          </p>
        )}
        <dl className="flex flex-wrap">
          <dt className="mr-2">Reference:</dt>
          <dd className="">{demand.reference}</dd>
        </dl>
        <dl className="flex flex-wrap">
          <dt className="mr-2">Amount:</dt>
          <dd className="">&pound;{demand.amount}</dd>
        </dl>
        <figure className="my-8">
          <QRCode style={{ width: 256 }} value={demand.paymentUri} />
        </figure>
        <p className="text-xs">
          Link:{" "}
          <a
            href={demand.paymentUri}
            className="underline text-indigo-400 hover:text-indigo-500 focus:text-indigo-500"
          >
            {demand.paymentUri}
          </a>
        </p>
      </div>
    </Layout>
  );
}
