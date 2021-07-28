import React from 'react';

import Header from './Header/Header';

export default function Layout({ children }, props ) {
  return (
    <>
      <Header/>
      <main className={`${ props.pageName }`}>
        {children}
      </main>
    </>
  )
}