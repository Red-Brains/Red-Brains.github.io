import React from "react";

export default function WrapperContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"max-w-4xl md:mx-auto mx-3 " + className}>{children}</div>
  );
}
