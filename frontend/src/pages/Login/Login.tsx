import React, { useState } from "react";
import './Login.css'

export const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log('Email:', email);
        console.log('Password:', password);

        const loginSuccess = false;

        if (loginSuccess) {
            console.log('Login realizado com sucesso!');
            resetForm();
        } else {
            console.log('Erro no login - mantém os dados');
        }
    }


    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Sistema Financeiro</h1>
                <p>Entre com suas credenciais</p>


                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite o seu melhor e-mail"
                                required
                            />
                        </label>
                    </div>

                    <div className="input-group">

                        <label>Senha:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Digite a sua senha"
                                required
                            />
                        </label>
                    </div>

                    <button type='submit' className="input-button">Enviar</button>

                </form>
            </div>
        </div>
    )

}
