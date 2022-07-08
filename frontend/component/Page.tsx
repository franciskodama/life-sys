import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from './Header';

export default function Page(props: any) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{props.children}</InnerStyles>
    </>
  );
}

// ========== This is saved to remember how to use props in Typescript ==========
// export default function Page(props: any) {
//   return (
//     <>
//       <h1>Page Component</h1>
//       <h3>{props.cool}</h3>
//       {props.children}
//     </>
//   );
// }

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyles = createGlobalStyle`

html {
  @font-face {
    font-family: 'axiformaregular';
    src: url('../public/kastelov_-_axiforma_regular-webfont.woff') 
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
  --font-thin: "axiformathin", sans-serif;
  --font-light: "axiformalight", sans-serif;
  --font-regular: "axiformaregular", sans-serif;
  --font-medium: "axiformamedium", sans-serif;
  --font-semibold: "axiformasemibold", sans-serif;
  --font-heavy: "axiformaheavy", sans-serif;
  --font-second: "Hubballi", cursive;

  --black: #393939;
  --grey: #3a3a3a;
  --lightGrey: #e1e1e1;
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: '0 12px 24px 0 rgba(0,0,0,0.09';
  box-sizing: border-box;
}

body {
  font-family: 'axiformaregular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* ----------- STARTERS ----------- */

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: var(--font-thin);
  font-size: 100%;
  background-color: var(--offWhite);
  color: var(--black);
  line-height: 1.6;
}

.section {
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
}

a:link,
a:visited,
a:active {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  font-family: 'axiformaregular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* ----------- RESET ----------- */
/* 
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
} */
`;
