import React, { useState } from "react";
import { Link } from 'react-router-dom'
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

        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não são iguais, tente novamente!");
            return
        }

        console.log('Registro realizado com sucesso')
        resetForm()
    }


    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Cadastre-se</h1>
                <p>Junta-se ao nosso sistema financeiro</p>

                <form className="register-form" onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Nome Completo:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Digite o seu nome completo"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email:</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite o seu melhor email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Senha:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Digite a sua senha"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Confirmar senha:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirme a senha"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="register-button">Enviar</button>
                </form>

                <div className="register-footer">
                    <p>
                        Já tem uma conta ?

                        <Link to="/login" className="link">Clique aqui</Link>
                    </p>
                </div>
            </div>
        </div>
    );

}