import React from 'react'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FriendsForm.module.css'

const FriendsForm = () => {
    return (
        <section className={S.friendContainer}>
            <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <form className={S.formContainer}>
                <div className={S.input}>
                    <Label label={'Nome do seu amigo:'} />
                    <Input type='text' name='friendName' />
                </div>
                <div className={S.input}>
                    <Label label={'Email:'} />
                    <Input type='email' name='email' />
                </div>
            </form>
            <Button subtitle={'Enviar agora'} style={S.btn} />
        </section>
    )
}

export default FriendsForm