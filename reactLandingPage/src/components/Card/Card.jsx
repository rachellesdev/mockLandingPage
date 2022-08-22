import React from 'react'
import Button from '../Button/Button'

const Card = ({img, name, descrip, before, after, quotas, quotasValue}) => {
  return (
    <article>
      <picture>
        <img src={img}  alt="produto" />
      </picture>
      <h3>{name}</h3>
      <small>{descrip}</small>
      <h4>De:{before},00</h4>
      <h5>Por:{after},00</h5>
      <p >ou {quotas}x de:{quotasValue}</p>
      <Button subtitle="Comprar" />
    </article>
  )
}

export default Card