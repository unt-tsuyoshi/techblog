import { css } from '@emotion/react';

export const globalStyle = css`
  /* ------------------------
  reset
------------------------ */
  html,
  body {
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font-size: inherit;
    line-height: inherit;
  }

  pre,
  textarea {
    overflow: auto;
  }

  [hidden],
  template {
    display: none;
  }

  details,
  main,
  summary {
    display: block;
  }

  input[type='number'] {
    width: auto;
  }

  input[type='search'] {
    -webkit-appearance: textfield;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  progress {
    display: inline-block;
  }

  small {
    font-size: 75%;
  }

  sub,
  sup {
    position: relative;
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  textarea {
    resize: vertical;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  audio:not([controls]) {
    display: none;
  }

  img {
    border: 0;
    max-width: 100%;
    height: auto;
  }

  button,
  input,
  select,
  textarea {
    min-height: 1.5em;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  input {
    line-height: normal;
  }

  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    border-style: none;
    cursor: pointer;
    background-color: transparent;

    -webkit-appearance: button;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  ol,
  ul {
    list-style: none;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  fieldset {
    border: 0;
  }

  // 追加
  img {
    vertical-align: top;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  /* ------------------------
base
------------------------ */

  body {
    background-color: #f7f5f2;
  }
`;
