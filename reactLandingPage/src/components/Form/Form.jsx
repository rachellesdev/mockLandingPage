import React from 'react'
import FormText from '../FormText/FormText'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Button from '../Button/Button'

const Form = () => {
    return (
        <form>
            <FormText />
            <div>
                <Label label={'Seu nome:'} />
                <Input type="text" />
            </div>
            <div >
                <Label label={"E-mail:"} />
                <Input type="email" />
            </div>
            <div>
                <Label label={"CPF"} />
                <Input type="text" />
            </div>
            <div className='radioContainer'>
                <div>
                    <Input type="radio" name="sexo" />
                    <Label label={"Masculino"} />
                </div>
                <div>
                    <Input type="radio" name="sexo" />
                    <Label label={"Feminino"} />
                </div>
            </div>
            <Button subtitle={"Enviar"} />
        </form>
    )
}

export default Form