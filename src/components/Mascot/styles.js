import styled from 'styled-components';

const Container = styled.section`
  padding: 30px 0;
  display: grid;
  grid-template-columns: 220px 220px;
  margin: 0 80px;

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
    margin: 0 5px;

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
