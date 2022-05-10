import { css } from '@emotion/react';
import { breakpointUp, breakpoints } from '../styles/mq';

export const Header = () => {
  return (
    <>
      <header css={headerCss}>
        <div css={headerInnerCss}>
          <h1 css={headerLogoCss}>Techblog</h1>
          <button type="button" css={humburgerCss}>
            <span css={humburgerLineCss}></span>
            <span css={humburgerLineCss}></span>
          </button>
        </div>
      </header>
    </>
  );
};

const headerCss = css`
  height: 60px;
`;

const headerLogoCss = css`
  font-size: 20px;
  font-weight: normal;
`;

const headerInnerCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-inline: 15px 7px;
`;

const humburgerCss = css`
  position: relative;
  width: 45px;
  height: 45px;
`;

const humburgerLineCss = css`
  position: absolute;
  width: 30px;
  height: 2px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  &:nth-child(1) {
    top: 16px;
  }
  &:nth-child(2) {
    top: 28px;
  }
`;
