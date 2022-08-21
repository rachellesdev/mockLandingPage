import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'

const Header = () => {
    return (
        <header>
            <Title title1={'uma seleção de produtos'} title2={'especial para você'} />
            <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
            <div className='DivForBtn'>
                <Button subtitle={'Conheça a Linx'} />
                <Button subtitle={'Ajude o algorítimo'} />
                <Button subtitle={'Seus produtos'} />
                <Button subtitle={'Compartilhe'} />
            </div>
        </header>
    )
}

export default Header