import Head from "next/head";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-50 to-gray-50">
      <Head>
        <title>Crezco demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <div className="border rounded-lg max-w-lg">
          <header className="bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-t-lg border-b p-8 text-white">
            <h1 className="mb-4 text-6xl tracking-tighter font-bold">
              Invoicer
            </h1>
            <p className="text-xl font-medium">
              Generate invoices, get paid quick,
              <br />
              powered by&nbsp;
              <a href="https://crezco.com" class="border-b border-b-2">
                Crezco
              </a>
            </p>
          </header>
          <div className="p-8 bg-white rounded-b-lg">
            <p className="text-lg">
              To get started connect your bank to Crezco.
            </p>
            <button className="mt-16 p-4 bg-indigo-400 font-medium text-lg text-white rounded-lg hover:bg-indigo-600 focus:bg-indigo-600">
              Connect with Crezco
            </button>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t divide-x bg-white">
        <a
          className="px-4"
          href="https://jonheslop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Jon Heslop
        </a>
        <a
          className="px-4 flex items-center justify-center"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
