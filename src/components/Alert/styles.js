import styled from 'styled-components';

const Alert = styled.div`
  text-align: center;
  width: 50%;
  padding: 30px;
  border-radius: 20px;
  background: ${props => props.background || '#f8f8f2'};
  color: ${props => props.color || '#494949'};

  p {
    font-size: 18px;
    font-weight: 900;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export default Alert;
