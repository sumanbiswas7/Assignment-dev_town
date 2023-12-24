import classes from "./button.module.css";

import { ButtonHTMLAttributes } from "react";

export function Button({ variant, size, ...props }: ButtonProps) {
   return (
      <button
         {...props}
         className={`${classes.btn} ${variant === "filled" ? classes.btn_filled : classes.btn_outlined} ${
            size === "sm" ? classes.size_sm : null
         }`}
      >
         {props.children}
      </button>
   );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   // Add any additional custom props if needed
   variant?: "filled" | "outline";
   size?: "md" | "sm";
}
