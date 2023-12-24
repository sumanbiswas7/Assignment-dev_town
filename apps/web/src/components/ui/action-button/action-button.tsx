import classes from "./action-button.module.css";

import { ButtonHTMLAttributes } from "react";

export function ActionButton({ size, ...props }: ButtonProps) {
   return (
      <button {...props} className={`${classes.btn} ${classes.btn_filled} ${size === "sm" ? classes.size_sm : null}`}>
         {props.children}
      </button>
   );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   // Add any additional custom props if needed
   size?: "md" | "sm";
}
