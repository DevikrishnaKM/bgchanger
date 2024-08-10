import React from 'react'

const Btn = (props) => {
  return (
    <button
    onClick={props.onClick}
    className='outline-none px-4 rounded-3xl shadow-lg'
    style={
        {backgroundColor: props.boxColor,
         color:props.boxColor==="black" ? "white" : "black" }}
        >
        {props.text}
    </button>
  )
}

export default Btn
