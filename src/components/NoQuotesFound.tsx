import styled from "styled-components";

const DivStyled = styled.div`
  height: 20rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    color: #262c2c;
    font-size: 3rem;
    font-weight: bold;
  }
`;

export default function NoQuotesFound() {
  return (
    <DivStyled>
      <p>No quotes found!</p>
      <a className="btn">Add a Quote</a>
    </DivStyled>
  );
}
