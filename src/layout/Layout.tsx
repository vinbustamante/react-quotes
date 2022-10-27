import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const MainStyled = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

export default function Layout() {
  return (
    <>
      <MainNavigation />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </>
  );
}
