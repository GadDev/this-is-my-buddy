import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  height: 60px;
  margin: 0 auto 60px;
  box-shadow: 0 10px 20px 0 rgb(0 35 90 / 10%), 0 0 2px 0 rgb(0 35 90 / 6%);
  border-bottom: 1px solid #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 3;
`;

export const Footer = styled.footer`
  position: relative;
  margin: 40px auto 0;
  color: #949caf;
  text-align: center;
  font-size: 10px;
  line-height: 1;
  padding: 12px 8px;
  font-weight: 400;
`;

export const LayoutStyled = styled.div`
  width: 760px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
