export default function Loading({ show = false }) {
  if (show) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
        <span
          className="rounded-full border-2 border-indigo-400 w-8 h-8 animate-spin mr-8"
          style={{
            borderLeftColor: "transparent",
          }}
        >
          {" "}
        </span>
        <span className="text-indigo-400 font-bold tracking-tighter text-5xl">
          Loading
        </span>
      </div>
    );
  } else {
    return null;
  }
}
