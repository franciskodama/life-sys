import Link from 'next/link';
import * as React from 'react';
import { Nav } from './Nav';

export interface Props {}

export function Header(props: Props) {
  return (
    <header>
      <div className='bar'>
        <Link href='/'>Life Sys</Link>
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <p>I am the header</p>
      <Nav />
    </header>
  );
}
