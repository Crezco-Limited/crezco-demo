export default function Button({ href, children }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      className="inline-block mt-16 p-4 bg-indigo-400 font-medium text-lg text-white rounded-lg hover:bg-indigo-600 focus:bg-indigo-600"
    >
      {children}
    </Tag>
  );
}
