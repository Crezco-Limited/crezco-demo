import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-50 to-gray-50">
      <Head>
        <title>Crezco demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <div className="border rounded-lg max-w-lg">
          <Header />
          <div className="p-8 bg-white rounded-b-lg">
            <p className="text-lg">
              To get started connect your bank to Crezco.
            </p>
            <Button>Connect Crezco</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
