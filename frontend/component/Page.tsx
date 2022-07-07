import * as React from 'react';
import { Header } from './Header';

export default function Page(props: any) {
  return (
    <>
      <Header />
      <h1>Page Component</h1>
      <h3>{props.cool}</h3>
      {props.children}
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
