import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase';
import { RegisterContainer, Title, Input, RegisterButton, LoginLink } from './RegisterStyles';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const signUpWithEmail = async (event) => {
    event.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      navigate('/');
    } catch (error) {
      console.error('Error creating user with email and password', error);
    }
  };

  return (
    <RegisterContainer>
      <Title>Register</Title>
      <form onSubmit={signUpWithEmail}>
        <Input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterButton type="submit">Register</RegisterButton>
      </form>
      <LoginLink onClick={() => (window.location.href = '/login')}>
        Already have an account? Login
      </LoginLink>
    </RegisterContainer>
  );
}

export default Register;
