import * as React from 'react';
import Link from 'next/link';

export interface INavProps {}

export function Nav(props: INavProps) {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/shortcut'>Shortcut</Link>
      <Link href='/affirmation'>Affirmation</Link>
      <Link href='/todo'>Todo</Link>
      <Link href='/weather'>Weather</Link>
      <Link href='/account'>Account</Link>
    </nav>
  );
}
