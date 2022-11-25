import styled from 'styled-components';

interface IError {
  error: boolean;
}

export const Section = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/dbhb8sohh/image/upload/v1668207990/bg-gradient_u2tm16.jpg');
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  :nth-child(1) {
    background-image: url('https://res.cloudinary.com/dbhb8sohh/image/upload/v1668208417/WQI5TEQ4H5B2PDYKVJYTTHYU4U_cu4wgz.jpg');
    background-position: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  :nth-child(2) {
    gap: 1.5em;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 4em;
`;

export const Header = styled.h3`
  font-size: 3em;
  font-weight: 400;
`;

export const Span = styled.span`
  font-size: 1em;
  font-weight: 400;
  color: #7362c3;
`;

export const HyperText = styled(Span)`
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  font-size: 1em;
`;

export const Label = styled.span`
  color: #9ca3af;
  display: inline-block;
  position: absolute;
  bottom: 3em;
  transition: 0.2s ease-in;
`;

export const Input = styled.input<IError>`
  color: #fff;
  position: relative;
  margin-bottom: 2rem;
  padding: 1em 0;
  background-color: transparent;
  border-bottom: ${(props) =>
    props.error ? '2px solid #ef4444' : '2px solid #fff'};
  transition: 0.2s ease-in;
  width: 100%;
  z-index: 1;
  :focus {
    /* border-bottom: 2px solid #c9ccd0; */
    transition: 0.2s ease-in;
  }
  :focus + ${Label}, :valid + ${Label} {
    color: #fff;
    transform: translateY(-2rem);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #b535f6;
  transition: 0.2s ease-in;
  padding: 1em 0;
  border-radius: 1em;
  &:disabled {
    background-color: #4b5563;
    cursor: auto;
    &:hover {
      background-color: #4b5563;
    }
  }
  :hover {
    transition: 0.2s ease-in;
    background-color: #c35df7;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
`;

export const Icon = styled.div`
  position: absolute;
  top: 25%;
  right: 0;
  cursor: pointer;
  z-index: 1;
`;

export const HelperText = styled.p`
  position: absolute;
  color: #ef4444;
  top: 70%;
`;
