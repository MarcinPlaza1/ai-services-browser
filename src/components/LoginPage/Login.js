import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase';
import { LoginContainer, Title, GoogleSignInButton, OrText, Input, LoginButton, SignUpLink } from './LoginStyles';
import { UserContext } from '../../contexts/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const signInWithEmail = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      setUser(user);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with email and password', error);
    }
  };

  return (
    <LoginContainer>
      <Title>Log in to the platform</Title>
      <GoogleSignInButton onClick={signInWithGoogle}>
        Get started with Google
      </GoogleSignInButton>
      <OrText>Or continue with email</OrText>
      <form onSubmit={signInWithEmail}>
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
        <LoginButton type="submit">Login</LoginButton>
      </form>
      <SignUpLink onClick={() => (window.location.href = '/register')}>
        Don't have an account? Register
      </SignUpLink>
    </LoginContainer>
  );
}

export default Login;

