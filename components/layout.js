import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ title, children }) {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-50 to-gray-50">
      <Head>
        <title>{title} - Crezco demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <div className="border rounded-lg max-w-lg">
          <Header /> {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
