import { PropsWithChildren } from "react";
import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const MainStyled = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

type LayoutProps = PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNavigation />
      <MainStyled>{children}</MainStyled>
    </>
  );
}
