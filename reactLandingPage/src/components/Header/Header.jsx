import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'
import S from './Header.module.css'

const Header = () => {
    return (
        <header className={S.header}>
            <Title title1={'uma seleção de produtos'} title2={'especial para você'} />
            <p className={S.p}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
            <div className={S.container}>
                <Button subtitle={'Conheça a Linx'} style={S.btn}/>
                <Button subtitle={'Ajude o algorítimo'} style={S.btn} />
                <Button subtitle={'Seus produtos'} style={S.btn} />
                <Button subtitle={'Compartilhe'} style={S.btn} />
            </div>
        </header>
    )
}

export default Header