import React from 'react'

function Additional(props) {
  return (<button onClick={props.handler}>{props.text}</button>);
}

export default Additional;

