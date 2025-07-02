// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../api'; 

const FormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #a8edea, #fed6e3);
`;

const Form = styled.form`
  text-align: center;
  padding: 40px 30px;
  border-radius: 12px;
  max-width: 450px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 5px 25px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  width: calc(100% - 40px);
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #44E610;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 15px;
  font-size: 16px;
  &:hover {
    background-color: #36c00d;
  }
`;

const Heading = styled.h1`
  color: #333;
  margin-bottom: 5px;
`;

const SubHeading = styled.h2`
  color: #666;
  margin-bottom: 25px;
  font-size: 18px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post('/auth/login', { username, password });
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  } catch (err) {
    alert('Invalid credentials');
  }
};
  return (
    <FormWrapper>
      <Form onSubmit={handleLogin}>
        <Heading>Welcome to Expense Tracker</Heading>
        <SubHeading>Login to your account</SubHeading>
        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Login</Button>
        <p style={{ marginTop: '15px' }}>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </Form>
    </FormWrapper>
  );
};

export default Login;