import React, { CSSProperties, FC, ReactNode } from "react";
// import Spinner from "../loaders/spinner";

export type ButtonProps = {
  /**
   * The content of the button.
   */
  label?: ReactNode | string;
  /**
   * Link fro next or react-router-dom
   */
  Link?: any;
  /**
   * icon for button
   */
  icon?: ReactNode;
  /**
   * default className
   */
  className?: string;
  /**
   * loading state
   */
  loading?: boolean;
  onClick?: () => any;
  disabled?: boolean;
  style?: CSSProperties;
  href?: string;
  to?: string;
  // spinnerBgColor?: string;
  // spinnerColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  ripple?: boolean;
};

const Button: FC<ButtonProps> = ({
  style,
  label,
  icon,
  Link,
  className,
  // loading,
  onClick,
  disabled,
  type,
  // spinnerBgColor,
  // spinnerColor,
  href,
  to,
  ripple = true,
}) => {
  return (
    <>
      {href && (
        <Link href={href}>
          <a
            style={{
              cursor: disabled ? "default" : "pointer",
              opacity: disabled ? 0.4 : 1,
              position: "relative",
              ...style,
            }}
            className={`${className}`}
            onClick={(e: any) => {
              if (!disabled && ripple) {
                rippleEffect(e);
              }
            }}
          >
            {label}
            {/* {loading && <Spinner color={spinnerColor} bgColor={spinnerBgColor} />} */}
          </a>
        </Link>
      )}
      {to && (
        <Link
          to={to}
          className={`${className}`}
          onClick={(e: any) => {
            if (!disabled && ripple) {
              rippleEffect(e);
            }
          }}
          style={{
            cursor: disabled ? "default" : "pointer",
            opacity: disabled ? 0.4 : 1,
            position: "relative",
            ...style,
          }}
        >
          <a>
            {label}
            {/* {loading && <Spinner color={spinnerColor} bgColor={spinnerBgColor} />} */}
          </a>
        </Link>
      )}
      {!Link && (
        <button
          className={`${className}`}
          onClick={(e: any) => {
            if (!disabled) {
              onClick && onClick();
              ripple && rippleEffect(e);
            }
          }}
          type={type ?? "submit"}
          disabled={disabled ?? false}
          style={{
            cursor: disabled ? "default" : "pointer",
            opacity: disabled ? 0.4 : 1,
            position: "relative",
            ...style,
          }}
        >
          {icon}
          {label}
          {/* {loading && <Spinner color={spinnerColor} bgColor={spinnerBgColor} />} */}
        </button>
      )}
    </>
  );
};

export default Button;

const rippleEffect = (e: { currentTarget: any; clientX: number }) => {
  const button = e.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `-40px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
};
