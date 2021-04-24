export default function Header() {
  return (
    <header className="bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-t-lg border-b p-8 text-white">
      <h1 className="mb-4 text-6xl tracking-tighter font-bold">Invoicer</h1>
      <p className="text-xl font-medium">
        Generate invoices, get paid quick,
        <br />
        powered by&nbsp;
        <a href="https://crezco.com" className="border-b border-b-2">
          Crezco
        </a>
      </p>
    </header>
  );
}
