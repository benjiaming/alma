import React, { useState } from 'react';
import { LoginContainer, LoginForm, StyledH1, StyledInput, SubmitButton, ErrorMessage } from '../ui/StyledComponents';

interface LoginProps {
    onLogin: () => void;
}


const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication logic
        if (username === 'alma' && password === 'leads') {
            onLogin();
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit} onClick={() => setError('')}>
                <StyledH1>Login</StyledH1>
                <StyledInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    required
                    aria-invalid={!!error}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <StyledInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    aria-invalid={!!error}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton type="submit">Login</SubmitButton>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </LoginForm>
            
        </LoginContainer>
    );
};

export default Login;

