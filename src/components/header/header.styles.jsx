import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #F2F5FC;
  box-shadow: 2px 2px 2px #EBD9AE;
  @media(max-width: 767px) {
    position: fixed;
    z-index: 2;
    height: 80px;
    margin-bottom: 32px;
  }
`;

export const HeaderTitle = styled.div`
    font-family: 'Open Sans Condensed';
    font-size: 32px;
    text-transform: uppercase;
    color: #ebd9ae;
    position: absolute;
    left: 128px;
    top: 16px;
    @media(max-width: 767px) {
        display: none;
    }
;`

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    width: 70px;
    padding-left: 64px;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 64px;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color: #979EB0;
    @media(max-width: 767px) {
        padding-left: 8px;
        padding-right: 8px;
    }
`;
