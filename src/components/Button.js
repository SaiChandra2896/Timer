import React from 'react';

function Button(props) {
  return (
    <div>
      <button type='button' style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }} className={props.className} onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button
