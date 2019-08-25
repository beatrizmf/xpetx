import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    margin-bottom: 50px;
  }
`;

export default Container;
