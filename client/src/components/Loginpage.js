import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Alertp } from './Alert';
import Navbarp from './Navbarp';

const Loginpage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setError(null);
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/");
        }
        else {
            navigate("/login");
        }
    }, [navigate])

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password,
            });
            const token = response.data.token;
            //   setToken(token);
            localStorage.setItem('token', token);
            alert("Login Successful");
            navigate("/");
        }
        catch (error) {
            console.error('Login error:', error);
            setError('Invalid Credentials');
        }
    };

    return (
        <>
            <Navbarp />
            {error && <Alertp />}
            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Welcome back!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Do not have an account yet?{' '}
                    <Anchor size="sm" component="button">
                        Create account
                    </Anchor>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <PasswordInput label="Password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} required mt="md" />
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                        <Anchor component="button" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button fullWidth mt="xl" onClick={handleLogin}>
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </>
    );
}

export default Loginpage
