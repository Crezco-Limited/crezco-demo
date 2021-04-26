import Head from "next/head";
import { QRCode } from "react-qr-svg";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import getPayDemandAsProps from "@/lib/get-pay-demand";

export async function getServerSideProps({ query }) {
  return await getPayDemandAsProps(query.id);
}

export default function Invoice({ demand, error }) {
  return (
    <Layout title="Invoice details">
      <div className="p-8 bg-white rounded-b-lg">
        <p className="text-lg font-medium mb-4">
          Your invoice is ready to share
        </p>
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
