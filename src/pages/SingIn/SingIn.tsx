/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import {
  Section,
  Box,
  Header,
  Span,
  Stack,
  Input,
  Label,
  Button,
  InputContainer,
  Icon,
  HelperText,
  HyperText,
  Text
} from '../SingUp/SingUp.styles';
import { Container } from './SingIn.styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCustomDispatch } from '../../hooks/redux';
import { postUserAuth } from 'src/redux/slices/auth';

const SingIn: React.FC = () => {
  const dispatch = useCustomDispatch();
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

  const validateEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleShowPass = (): void => {
    setShowPass(!showPass);
  };

  const validation = (input: IInput): object => {
    const errors: IData = {};
    if (input.email.length === 0) {
      errors.email = 'Required email';
    } else if (!validateEmail.test(input.email)) {
      errors.email = 'Email invalid';
    }
    if (input.password.length === 0) {
      errors.password = 'Required password';
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
    dispatch(postUserAuth(input));
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
              Sing <Span>In</Span>
            </Header>
            <Text>
              Do not you have an account yet?{' '}
              <Link to="/singin" style={{ textDecoration: 'none' }}>
                <HyperText>Sing up</HyperText>
              </Link>
            </Text>
          </Box>
          <Box>
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
                input.password.length === 0
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
