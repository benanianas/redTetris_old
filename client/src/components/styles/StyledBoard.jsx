import styled from "styled-components";
import { T_WIDTH, T_HEIGHT } from "../../../utils/tetris";

const StyledBoard = styled.div`
  max-width: 350px;
  height: 700px;
  border: solid black 1px;
  background: #8a8a8a37;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(${T_WIDTH}, 1fr);
  grid-template-rows: repeat(${T_HEIGHT}, 1fr);
`;

export default StyledBoard;
