export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t divide-x bg-white mt-16">
      <a
        className="px-4 hover:text-indigo-500 focus:text-indigo-500"
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
  );
}
