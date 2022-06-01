import { css } from '@emotion/react';
import { breakpointUp, breakpoints } from '../styles/mq';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header css={headerCss}>
        <div css={headerInnerCss}>
          <Link href="/">
            <a>
              <h1 css={headerLogoCss}>Techblog</h1>
            </a>
          </Link>
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
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
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
  &:nth-of-type(1) {
    top: 16px;
  }
  &:nth-of-type(2) {
    top: 28px;
  }
`;
