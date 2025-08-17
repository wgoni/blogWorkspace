import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: ${props => props.primary ? '#3498db' : '#95a5a6'};
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({ text, onClickHandler, primary }) => {
  const handleClick = (e) => {
    if (process.env.REACT_APP_ENV === 'dev') {
      console.log(`[DEBUG] 버튼 클릭됨: "${text}"`, { primary });
    }
    if (onClickHandler) {
      onClickHandler(e);
    }
  };
  return (
    <StyledButton onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;