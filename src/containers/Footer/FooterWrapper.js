import styled from "styled-components";

const FooterWrapper = styled.footer`
    background-image: ${props => props.colors.footerBack};

    a {
        color: ${p => p.colors.color} !important;
    }
`;

export default FooterWrapper