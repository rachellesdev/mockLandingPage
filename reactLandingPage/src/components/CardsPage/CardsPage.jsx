import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import Button from '../Button/Button';
import Card from '../Card/Card'
import S from './CardsPage.module.css'

const CardsPage = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)

    async function handleRequest() {
        const response = await fetch(
            `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
        );
        const json = await response.json();
        setProducts([...products, ...json.products])
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        handleRequest();
    }, [page]);

    return (
        <div className={S.page}>
            <div className={S.cardsContainer}>
                {products.length > 0 &&
                    products.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                img={item.image}
                                name={item.name}
                                descrip={item.description}
                                after={item.oldPrice}
                                before={item.price}
                                quotas={item.installments.count}
                                quotasValue={item.installments.value}
                            />
                        );
                    })}
            </div>
            <Button style={S.btn} onClick={nextPage} subtitle="Ainda mais produtos aqui" />
        </div>
    )
}

export default CardsPage