import React from 'react'
import FormText from '../FormText/FormText'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'
import S from './Form.module.css'

const Form = () => {
    return (
        <section className={S.sec}>
            <div className={S.text}><FormText /></div>            
            <form className={S.form}>                
                <div className={S.div1}>
                    <Label label={'Seu nome:'} />
                    <Input className={S.input} type="text" />
                
                    <Label label={"E-mail:"} />
                    <Input type="email" />
                
                    <Label label={"CPF:"} />
                    <Input type="text" />
                    </div>
                <div className='radioContainer'>
                    
                        <Input type="radio" name="sexo" />
                        <Label label={"Masculino"} />
                    
                        <Input type="radio" name="sexo" />
                        <Label label={"Feminino"} />
                    
                </div>
                <Button style={S.btn} subtitle={"Enviar"} />
            </form>
        </section>
    )
}

export default Form