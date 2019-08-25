import styled from 'styled-components';

const Container = styled.article`
  background: #f8f8f2;
  color: #494949;
  border-radius: 20px;
  padding: 20px;
  width: 75%;
  height: fit-content;

  p {
    font-size: 22px;
    text-align: justify;
    font-family: 'Kalam', cursive;
  }

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export default Container;
