"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  var content = props.content,
      handleChange = props.handleChange,
      value = props.value; // close modal by using setState from parent component

  var closeModal = function closeModal(_) {
    handleChange(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, value && /*#__PURE__*/_react.default.createElement("aside", {
    className: "background-Modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-Modal"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-Modal",
    onClick: closeModal
  }, "\u2715"), /*#__PURE__*/_react.default.createElement("h3", null, content))));
}