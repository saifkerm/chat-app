import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles';
import styles from './index.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
}

export const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer className={styles.firstName}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField type="text" id="firstName" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField type="text" id="lastName" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
}