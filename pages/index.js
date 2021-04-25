import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-50 to-gray-50">
      <Head>
        <title>Welcome - Crezco demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <div className="border rounded-lg max-w-lg">
          <Header />
          <div className="p-8 bg-white rounded-b-lg">
            <h2 className="font-medium text-2xl mb-4">How Invoicer works</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>
                Connect your bank account with{" "}
                <a
                  href="https://crezco.com"
                  className="border-b border-b-2 border-indigo-400 hover:text-indigo-500"
                >
                  Crezco
                </a>
              </li>
              <li>Enter invoice details</li>
              <li>Create payment link</li>
              <li>Share the payment link with the payee</li>
              <li>
                Payee uses link to pay directly into your bank account with no
                fees
              </li>
            </ol>
            <p className="text-lg my-8">
              To get started connect your bank to Crezco.
            </p>
            <Button href="https://app.sandbox.crezco.com/onboarding?partner_id=heslop-sandbox&redirect_uri=https://crezco-demo.jonheslop.vercel.app/create-invoice">
              Connect Crezco
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
