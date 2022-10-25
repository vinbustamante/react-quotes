import styled from "styled-components";

const DivStyled = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
`;

export default function Card(props: any) {
  return <DivStyled>{props.children}</DivStyled>;
}
