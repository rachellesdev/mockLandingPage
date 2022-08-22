import React from 'react'
import S from './Title.module.css'

const Title = ({title1, title2}) => {
  return (
    <div className={S.container}>
        <h1 className={S.line1}>{title1}</h1>
        <h1 className={S.line2}>{title2}</h1>
    </div>
  )
}

export default Title