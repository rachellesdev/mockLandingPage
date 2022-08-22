import React from 'react'
import S from './Label.module.css'

const Label = ({label}) => {
  return (
    <label className={S.label}>{label}</label>
  )
}

export default Label