import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles';
import styles from './index.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CreateUserParams } from '../../utils/types';

export const RegisterForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserParams>({ reValidateMode: 'onBlur' });

  console.log(errors);
  const onSubmit = (data: CreateUserParams) => {
    console.log(data);
  };

  const formFieldProps = { errors, register };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">
          Email
        </InputLabel>
        <InputField
          type="email"
          id="email"
          {...register('password', { required: 'Password is required' })}
        />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer className={styles.firstName}>
          <InputLabel htmlFor="firstName">
            First Name
          </InputLabel>
          <InputField
            type="text"
            id="firstName"
            {...register('firstName', { required: 'First Name is required' })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Last Name is required' })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
        />
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