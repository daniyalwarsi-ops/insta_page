import React from 'react';

function Button(props) {
  var buttonClass = "btn";

  if (props.variant === "secondary") {
    buttonClass = "btn btn-secondary";
  } else if (props.variant === "outline") {
    buttonClass = "btn btn-outline";
  } else {
    buttonClass = "btn btn-primary";
  }

  return (
    <button
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      className={buttonClass}
    >
      {props.icon ? <img className="icon-fb" src={props.icon} alt="" /> : null}
      {props.children}
    </button>
  );
}

export default Button;