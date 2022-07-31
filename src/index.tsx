import React, { CSSProperties, FC, ReactNode } from "react";
import "./button.css";

export type ButtonProps = {
  label?: ReactNode | string;
  Link?: any;
  icon?: ReactNode;
  className?: string;
  loading?: boolean;
  onClick?: () => any;
  disabled?: boolean;
  style?: CSSProperties;
  href?: string;
  to?: string;
  spinnerBgColor?: string;
  spinnerColor?: string;
  spinnerSize?: number;
  type?: "button" | "submit" | "reset" | undefined;
  ripple?: boolean;
};

const Button: FC<ButtonProps> = ({
  style,
  label,
  icon,
  Link,
  className,
  loading,
  onClick,
  disabled,
  type,
  spinnerBgColor,
  spinnerColor,
  spinnerSize,
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
              display: "inline-flex",
              overflow: "hidden",
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
            {loading && (
              <Spinner
                color={spinnerColor}
                bgColor={spinnerBgColor}
                size={spinnerSize}
              />
            )}
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
            display: "inline-flex",
            overflow: "hidden",
            ...style,
          }}
        >
          <a>
            {label}
            {loading && (
              <Spinner
                color={spinnerColor}
                bgColor={spinnerBgColor}
                size={spinnerSize}
              />
            )}
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
            display: "inline-flex",
            overflow: "hidden",
            ...style,
          }}
        >
          {icon}
          {label}
          {loading && (
            <Spinner
              color={spinnerColor}
              bgColor={spinnerBgColor}
              size={spinnerSize}
            />
          )}
        </button>
      )}
    </>
  );
};

interface SpinnerProps {
  color?: string;
  bgColor?: string;
  size?: number;
}

const Spinner: FC<SpinnerProps> = ({ color, bgColor, size }) => {
  const style = {
    "--spinner-color": color ?? "#ffffff",
    "--spinner-faint-color": color ? color + "00" : "#ffffff00",
    "--spinner-bg-color": bgColor ?? "black",
  } as CSSProperties;
  return (
    <span
      className={`spinner`}
      style={{
        height: size ?? 15,
        width: size ?? 15,
        ...style,
      }}
    />
  );
};

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

export default Button;
