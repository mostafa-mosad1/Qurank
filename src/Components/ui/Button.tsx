import React, { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";


interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string ;
  className?: string;
  children?: ReactNode;
  width?: "w-full" | "w-fit";
  isLoading?: boolean;
}
function Button({
  name,
  children,
  className,
  width,
  isLoading,
  ...rest
}: Iprops) {
  return (
    <>
      <button
        disabled={isLoading}
        type="button"
        {...rest}
        className={`${className}  ${width} flex justify-center items-center p-3 rounded-md  text-xl font-bold  `}
      >
        {name}
        {children}
      </button>
    </>
  );
}

export default Button;
