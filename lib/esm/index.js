var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import "./index.css";
var Button = function (_a) {
    var style = _a.style, label = _a.label, icon = _a.icon, Link = _a.Link, className = _a.className, loading = _a.loading, onClick = _a.onClick, disabled = _a.disabled, type = _a.type, spinnerBgColor = _a.spinnerBgColor, spinnerColor = _a.spinnerColor, spinnerSize = _a.spinnerSize, href = _a.href, to = _a.to, _b = _a.ripple, ripple = _b === void 0 ? true : _b;
    return (React.createElement(React.Fragment, null,
        href && (React.createElement(Link, { href: href },
            React.createElement("a", { style: __assign({ cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.4 : 1, position: "relative", display: "inline-flex" }, style), className: "".concat(className), onClick: function (e) {
                    if (!disabled && ripple) {
                        rippleEffect(e);
                    }
                } },
                label,
                loading && (React.createElement(Spinner, { color: spinnerColor, bgColor: spinnerBgColor, size: spinnerSize }))))),
        to && (React.createElement(Link, { to: to, className: "".concat(className), onClick: function (e) {
                if (!disabled && ripple) {
                    rippleEffect(e);
                }
            }, style: __assign({ cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.4 : 1, position: "relative", display: "inline-flex" }, style) },
            React.createElement("a", null,
                label,
                loading && (React.createElement(Spinner, { color: spinnerColor, bgColor: spinnerBgColor, size: spinnerSize }))))),
        !Link && (React.createElement("button", { className: "".concat(className), onClick: function (e) {
                if (!disabled) {
                    onClick && onClick();
                    ripple && rippleEffect(e);
                }
            }, type: type !== null && type !== void 0 ? type : "submit", disabled: disabled !== null && disabled !== void 0 ? disabled : false, style: __assign({ cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.4 : 1, position: "relative", display: "inline-flex" }, style) },
            icon,
            label,
            loading && (React.createElement(Spinner, { color: spinnerColor, bgColor: spinnerBgColor, size: spinnerSize }))))));
};
var Spinner = function (_a) {
    var color = _a.color, bgColor = _a.bgColor, size = _a.size;
    var style = {
        "--spinner-color": color !== null && color !== void 0 ? color : "#ffffff",
        "--spinner-faint-color": color ? color + "00" : "#ffffff00",
        "--spinner-bg-color": bgColor !== null && bgColor !== void 0 ? bgColor : "black",
    };
    return (React.createElement("span", { className: "spinner", style: __assign({ height: size !== null && size !== void 0 ? size : 15, width: size !== null && size !== void 0 ? size : 15 }, style) }));
};
var rippleEffect = function (e) {
    var button = e.currentTarget;
    var circle = document.createElement("span");
    var diameter = Math.max(button.clientWidth, button.clientHeight);
    var radius = diameter / 2;
    circle.style.width = circle.style.height = "".concat(diameter, "px");
    circle.style.left = "".concat(e.clientX - button.offsetLeft - radius, "px");
    circle.style.top = "-40px";
    circle.classList.add("ripple");
    var ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
};
export default Button;
