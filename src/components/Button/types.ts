import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<any>{
  fullWidth?: boolean;
  color?: "success" | "error" | "warning" | "inherit";
}
