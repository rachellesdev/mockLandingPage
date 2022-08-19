import React from 'react'

const Cards = () => {

    //const [produtos, setProdutos] = useState([]);
    //const [page, setPage] = useState(1)

    async function handleRequisicao() {
        const response = await fetch(
            'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=' + '1'
        );
        const json = await response.json();
        console.log(json)
    }

    return (
        <div>
            <button onClick={handleRequisicao}>Teste</button>
        </div>
    )
}

export default Cards