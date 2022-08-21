import React from 'react'

const Button = ({subtitle, onClick}) => {
  return (
    <button onClick={onClick}>{subtitle}</button>
  )
}

export default Button