import React from 'react'
import Button from '../Button/Button'
import S from './Card.module.css'

const Card = ({img, name, descrip, before, after, quotas, quotasValue}) => {
  return (
    <article className={S.card}>
      <picture className={S.img}>
        <img src={img}  alt="produto" />
      </picture>
      <h3>{name}</h3>
      <small className={S.edit1}>{descrip}</small>
      <h4 className={S.edit1}>De:{before},00</h4>
      <h5 className={S.after}>Por:{after},00</h5>
      <p className={S.edit1}>ou {quotas}x de:{quotasValue}</p>
      <Button style={S.btn} subtitle="Comprar" />
    </article>
  )
}

export default Card