import styled from 'styled-components';

const Container = styled.section`
  margin: 50px 80px;
  display: grid;
  grid-template-columns: 220px 220px;
  justify-items: center;
  justify-content: center;

  img {
    width: 200px;
  }

  img#balloon {
    width: 200px;
    margin-top: -60px;
  }

  p {
    font-size: 18px;
    margin: -92px 0 0 15px;
    font-weight: 900;
    color: #494949;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 180px 180px;
    margin: 30px 10px;

    p {
      font-size: 14px;
      margin: -74px 0 0 16px;
    }

    img {
      width: 160px;
    }

    img#balloon {
      width: 160px;
    }
  }
`;

export default Container;
