import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledH1, StyledInput, SubmitButton } from '../ui/StyledComponents';

const LoginContainer = styled.div`
    display: flex;
    position relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 200px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication logic
        if (username === 'alma' && password === 'leads') {
            onLogin();
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <StyledH1>Login</StyledH1>
                <StyledInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <StyledInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    required    
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton type="submit">Login</SubmitButton>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;

