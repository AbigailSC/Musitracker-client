import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    left: -200px
  }
  to{
    left: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #23314f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231c2947'/%3E%3Cstop offset='1' stop-color='%231c2947' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2319184d'/%3E%3Cstop offset='1' stop-color='%2319184d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23141244'/%3E%3Cstop offset='1' stop-color='%23141244' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2323314F'/%3E%3Cstop offset='1' stop-color='%2323314F' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2316223F'/%3E%3Cstop offset='1' stop-color='%2316223F' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23250E49'/%3E%3Cstop offset='1' stop-color='%23250E49' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
`;

export const SectionContent = styled.div`
  width: calc(100% - 260px);
  display: flex;
  height: 100%;
  padding: 2em 4em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const SectionContentLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 340px;
`;

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  height: 340px;
  overflow: hidden;
  border-radius: 1em;
  position: relative;
  background-color: #4b5563;
  & > img {
    object-fit: cover;
    object-position: center 42%;
    transition: transform 0.8s ease;
    height: 100%;
    width: 100%;
  }
  &:hover > img {
    transform: scale(1.05);
  }
`;

export const HeroContainerSkeleton = styled.div`
  width: 100%;
  display: flex;
  height: 340px;
  overflow: hidden;
  border-radius: 1em;
  position: relative;
  overflow: hidden;
  background-color: #4b5563;
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      #4b5563 0%,
      #7a879a 50%,
      #4b5563 100%
    );
    animation: ${loading} 1000ms ease infinite;
  }
`;

export const HeroContainerHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  background: rgba(99, 99, 99, 0.2);
  backdrop-filter: blur(3px);
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 2em;
  justify-content: center;
  & > h3 {
    color: #d4d4ea;
  }
  & > h2 {
    font-size: 2em;
    font-weight: 500;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
