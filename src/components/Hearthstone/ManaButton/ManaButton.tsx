import styled from "styled-components";

type ManaButtonProps = {
  active: boolean;
};
const ManaButton = styled.button<ManaButtonProps>`
  background-color: ${(props) => (props.active ? "green" : "blue")};
  color: whitesmoke;
  padding: 1rem;
  &:hover {
    background-color: green;
  }
`;
export default ManaButton;
