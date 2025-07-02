// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import API from '../api';

const FormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #fbc2eb, #a6c1ee);
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();
  try {
    await API.post('/auth/register', { email, username, password });
    alert('Registered successfully!');
    navigate('/login');
  } catch (err) {
    alert('Registration failed');
  }
};

  return (
    <FormWrapper>
      <Form onSubmit={handleRegister}>
        <Heading>Welcome to Expense Tracker</Heading>
        <SubHeading>Create your account</SubHeading>
        <Input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Register</Button>
        <p style={{ marginTop: '15px' }}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Form>
    </FormWrapper>
  );
};

export default Register;
