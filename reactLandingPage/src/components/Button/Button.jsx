import React from 'react'

const Button = ({subtitle, onClick, style}) => {
  return (
    <button onClick={onClick} className={style} >{subtitle}</button>
  )
}

export default Button