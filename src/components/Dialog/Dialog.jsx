export function Dialog({ className, children }) {
  return <div className={className}>{children}</div>;
}

export function DialogContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function DialogImage({ className, src, alt }) {
  return (
    <figure className="">
      {" "}
      <img
        src={`${src}`}
        className={`h-full w-full object-cover  border-t-2 border-b-2 border-gray-200 ${className}`}
        alt={`${alt}`}
      />
    </figure>
  );
}

export function DialogHeader({ children }) {
  return <div className="">{children}</div>;
}

export function DialogText({ tag, text, className }) {
  return (
    <p className={`description text-left px-4 text-xl ${className}`}>
      <span className=" font-bold">{tag}:</span> {text}
    </p>
  );
}