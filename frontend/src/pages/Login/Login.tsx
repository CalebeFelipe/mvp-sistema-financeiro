import React, { useState } from "react";
import './Login.css'

export const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log('Email:', email);
        console.log('Password:', password);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite o seu melhor e-mail"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite a sua senha"
                    required
                />

                <button type='submit'>Enviar</button>

            </form>
        </div>
    )

}
