import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
  width: ${({ open }) => (open ? "100%" : "0")};
  height: 100vh;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 0px;
  padding-bottom: 0px;
  transition: width 0.3s ease-in-out;
  z-index: 1;
  /*width: 100vw;*/
  overflow: hidden !important;

  a {
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;

    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
    color: #fff;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
