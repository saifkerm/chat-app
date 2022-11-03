import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles';

import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserCredentialsParams } from '../../utils/types';

export const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<UserCredentialsParams>({ reValidateMode: 'onBlur' });
  const onSubmit = (data: UserCredentialsParams) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="username">Username</InputLabel>
        <InputField
          type="text"
          id="username"
          {...register('username', { required: true })}
        />
      </InputContainer>
      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register('password', { required: true })}

        />
      </InputContainer>
      <Button>Login</Button>
      <div className={styles.footerText}>
        <span>Don't have an account? </span>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </div>
    </form>
  );;
}