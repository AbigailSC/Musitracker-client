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
  gap: 2em;
`;

export const GenresContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 100px;
  gap: 2em;
  flex-wrap: wrap;
`;
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
export const ArtistContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2em;
    background-color: rgba(195, 93, 247, 0.5);
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2em;
  }
`;

export const Title = styled.h3`
  font-size: 2em;
  color: #fff;
  font-weight: 700;
`;

export const ArtistHeader = styled.div`
  background: linear-gradient(#c3efc8, #64cdbc);
  width: 100%;
  height: 420px;
  position: relative;
  border-radius: 1em;
  & > h3 {
    position: absolute;
    top: 40%;
    bottom: 60%;
    width: 70%;
    padding: 0 2em;
    font-size: 3em;
    font-weight: 700;
    color: #ff4d38;
  }
`;

export const ArtistBg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1em;
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/45532e153848787.633b3013a2043.gif');
  background-repeat: no-repeat;
  background-size: 40% 100%;
  background-position: right;
  display: flex;
  clip-path: circle(30% at 90% 50%);
`;
