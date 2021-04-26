export default function Header() {
  return (
    <header className="bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-t-lg border-b p-8 text-white">
      <h1 className="mb-4 text-6xl tracking-tighter font-bold">Invoicer</h1>
      <p className="text-xl font-medium max-w-sm">
        Generate invoices, get paid quick, powered by&nbsp;
        <a
          href="https://crezco.com"
          className="border-b border-b-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crezco
        </a>
      </p>
    </header>
  );
}
