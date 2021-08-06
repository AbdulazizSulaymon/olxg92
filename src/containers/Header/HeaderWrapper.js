import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: ${props => props.colors.background};
  color: ${p => p.colors.color} !important;
`

export default HeaderWrapper;