export default function Button({ href, type = null, children }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      type={type}
      href={href}
      className="inline-block mt-4 p-4 bg-indigo-400 font-medium text-lg text-white rounded-lg hover:bg-indigo-600 focus:bg-indigo-600"
    >
      {children}
    </Tag>
  );
}
