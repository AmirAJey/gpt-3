import styled, { css } from "styled-components";
import LogoSrc from "../../assets/logo.svg";
import { NavbarLinksProps } from "./types";

export const Logo = styled.img.attrs((props) => ({
  alt: "logo",
  src: LogoSrc,
}))`
  width: 62px;
  height: 16px;
`;

export const NavbarLinks = styled.ul<NavbarLinksProps>`
list-style: none;
gap: 1rem;
  ${(props) =>
    props.variant === "primary"
      ? css`
          display: none;
          align-items: center;
          @media screen and (min-width: 900px) {
            & {
              display: flex;
            }
          }
        `
      : css`
          display: flex;
          flex-direction: column;
          align-items: end;
          position: absolute;
          top: 100%;
          right: 0;
          @media screen and (min-width: 900){
            display: none
          }
        `}
`;

export const LinksContainer = styled.div`
display: flex;
align-items: center;
gap: 3rem
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px
`
