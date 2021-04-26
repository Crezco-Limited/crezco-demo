export default function Input({
  label,
  name,
  type = "text",
  prefix = null,
  placeholder = "",
  ...otherProps
}) {
  const input = (
    <input
      className={`p-4 ${
        prefix && "pl-8"
      } border rounded focus:outline-none focus:ring focus:border-indigo-400 text-lg w-full`}
      placeholder={placeholder}
      inputMode={type === "number" ? "numeric" : "text"}
      pattern={type === "number" ? "[0-9]*" : undefined}
      type="text"
      name={name}
      id={name}
      {...otherProps}
    />
  );

  return (
    <div className="my-4">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      {prefix && (
        <div className="relative flex flex-wrap items-center">
          <span className="absolute left-4 text-lg">{prefix}</span>
          {input}
        </div>
      )}
      {prefix === null && input}
    </div>
  );
}
