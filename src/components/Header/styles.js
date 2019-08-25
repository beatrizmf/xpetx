import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px 50px 30px;

  h1 {
    font-size: 30px;
    color: #f8f8f2;
  }

  img {
    height: 150px;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 22px;
    }
  }
`;

export default Container;
