"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var style = _a.style, label = _a.label, icon = _a.icon, Link = _a.Link, className = _a.className, 
    // loading,
    onClick = _a.onClick, disabled = _a.disabled, type = _a.type, 
    // spinnerBgColor,
    // spinnerColor,
    href = _a.href, to = _a.to, _b = _a.ripple, ripple = _b === void 0 ? true : _b;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        href && (react_1.default.createElement(Link, { href: href },
            react_1.default.createElement("a", { style: __assign({ cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.4 : 1, position: "relative", display: "inline-flex" }, style), className: "".concat(className), onClick: function (e) {
                    if (!disabled && ripple) {
                        rippleEffect(e);
                    }
                } }, label))),
        to && (react_1.default.createElement(Link, { to: to, className: "".concat(className), onClick: function (e) {
                if (!disabled && ripple) {
                    rippleEffect(e);
                }
            }, style: __assign({ cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.4 : 1, position: "relative", display: "inline-flex" }, style) },
            react_1.default.createElement("a", null, label))),
        !Link && (react_1.default.createElement("button", { className: "".concat(className), onClick: function (e) {
                if (!disabled) {
                    onClick && onClick();
                    ripple && rippleEffect(e);
                }
            }, type: type !== null && type !== void 0 ? type : "submit", disabled: disabled !== null && disabled !== void 0 ? disabled : false, style: __assign({ cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.4 : 1, position: "relative", display: "inline-flex" }, style) },
            icon,
            label))));
};
exports.default = Button;
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
