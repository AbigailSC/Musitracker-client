import styled from 'styled-components';

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
  width: calc(100% - 100px);
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
  align-items: flex-start;
  padding: 2em 4em;
  margin-top: 100px;
`;

export const Header = styled.h2`
  font-size: 4em;
  font-weight: 700;
  /* background: linear-gradient(to right, #b535f6, #c35df7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; */
  color: #d4d4ea;
`;
