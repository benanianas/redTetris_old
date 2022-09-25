import styled from "styled-components";

export const StyledBlock = styled.div`
  background: rgb(${(props) => props.color});
  border: 5px outset rgba(${(props) => props.color}, .5);
`;
