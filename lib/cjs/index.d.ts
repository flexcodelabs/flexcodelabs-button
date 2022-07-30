import { CSSProperties, FC, ReactNode } from "react";
export declare type ButtonProps = {
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
    type?: "button" | "submit" | "reset" | undefined;
    ripple?: boolean;
};
declare const Button: FC<ButtonProps>;
export default Button;
