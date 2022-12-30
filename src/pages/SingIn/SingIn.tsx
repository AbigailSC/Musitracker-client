/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { useCustomDispatch, useCustomSelector } from '@hooks/redux';
import { singInAuth } from '@redux/slices/auth';
import { singIn } from '@redux/slices/user/user';
interface IData {
  email?: string;
  password?: string;
}

interface IInput {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState<IData>({});
  const { auth } = useCustomSelector((state) => state);
  const validateEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleShowPass = (): void => {
    setShowPass(!showPass);
  };

  useEffect(() => {
    auth.accessToken !== null && navigate('/home');
  }, [auth.accessToken]);

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
    dispatch(singIn(input));
    dispatch(singInAuth(input));

    setInput({
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
