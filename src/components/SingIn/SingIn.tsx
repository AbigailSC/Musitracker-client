/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import {
  Section,
  Container,
  Box,
  Header,
  Span,
  Stack,
  Input,
  Label,
  Button,
  InputContainer,
  Icon,
  HelperText
} from './SingIn.styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { postUserAuth } from '../../redux/slices/auth/index';

const SingIn: React.FC = () => {
  interface IData {
    username?: string;
    email?: string;
    password?: string;
  }

  interface IInput {
    username: string;
    email: string;
    password: string;
  }

  const [showPass, setShowPass] = useState(true);
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState<IData>({});
  const validateUsername = /^[a-zA-Z\s]+$/;
  const validateEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validatePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  const handleShowPass = (): void => {
    setShowPass(!showPass);
  };

  const validation = (input: IInput): object => {
    const errors: IData = {};
    if (input.username.length === 0) {
      errors.username = 'Required username';
    } else if (input.username.length < 8) {
      errors.username = 'The username is too short';
    } else if (input.username.length > 20) {
      errors.username = 'The username is too long';
    } else if (!validateUsername.test(input.username)) {
      errors.username = 'Username invalid. Try again';
    }
    if (input.email.length === 0) {
      errors.email = 'Required email';
    } else if (!validateEmail.test(input.email)) {
      errors.email = 'Email invalid';
    }
    if (input.password.length === 0) {
      errors.password = 'Required password';
    } else if (input.password.length < 8) {
      errors.password = 'The password is too short';
    } else if (input.password.length > 20) {
      errors.password = 'The password is too long';
    } else if (!validatePassword.test(input.password)) {
      errors.password = 'pass';
    }
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError(
      validation({
        ...input,
        [e.target.name]: e.target.value
      })
    );
  };

  const handleSubmit = (): void => {
    setError(validation(input));
    postUserAuth(input);
    setInput({
      username: '',
      email: '',
      password: ''
    });
  };
  return (
    <Section>
      <Container />
      <Container>
        <Stack>
          <Box>
            <Header>
              Sing <Span>Up</Span>
            </Header>
            <p>
              Already have an account? <span>Log in</span>
            </p>
          </Box>
          <Box>
            <InputContainer>
              <Input
                type="text"
                error={error.username !== undefined}
                required
                name="username"
                value={input.username}
                onChange={(e) => handleChange(e)}
              />
              <Label className="algo">Username</Label>
              {error.username != null && (
                <HelperText>{error.username}</HelperText>
              )}
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                error={error.email !== undefined}
                required
                name="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
              />
              <Label>Email</Label>
              {error.email !== undefined && (
                <HelperText>{error.email}</HelperText>
              )}
            </InputContainer>
            <InputContainer>
              <Input
                type={showPass ? 'password' : 'text'}
                error={error.password !== undefined}
                required
                name="password"
                value={input.password}
                onChange={(e) => handleChange(e)}
              />
              <Label>Password</Label>
              {error.password !== undefined && (
                <HelperText>{error.password}</HelperText>
              )}
              <Icon onClick={() => handleShowPass()}>
                {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </Icon>
            </InputContainer>
            <Button
              onClick={() => handleSubmit()}
              disabled={
                !(Object.keys(error).length === 0) ||
                input.email.length === 0 ||
                input.password.length === 0 ||
                input.username.length === 0
              }
            >
              Create account
            </Button>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
};

export default SingIn;
