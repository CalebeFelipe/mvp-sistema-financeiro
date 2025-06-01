import React, { useState } from "react";
import './Register.css';

export const Register: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }



    function handleSubmit(e: React.FormEvent) {

        e.preventDefault();

        console.log('Dados do cadastro:', formData)

        if(formData.password !== formData.confirmPassword) {
            alert("As senhas não são iguais, tente novamente!");
            return
        }

        console.log('Registro realizado com sucesso')
        resetForm()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite o seu nome completo"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite o seu melhor email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Digite a sua senha"
                    required
                />

                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirme a senha"
                    required
                />

                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );

}