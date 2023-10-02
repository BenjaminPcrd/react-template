import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./main.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "neutral" | "info" | "success" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles["button"]} ${className ?? ""}`}
        data-variant={variant ?? "primary"}
        data-size={size ?? "md"}
        {...props}
      >
        {children}
      </button>
    );
  }
);
