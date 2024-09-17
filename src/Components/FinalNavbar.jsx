import React from 'react';
import MiniNavbar from './miniNavbar';
import TabNavbar from './tabNavbar';
import MiniNavbar2 from './miniNavbar1';
import Nav from './nav';

export default function CompleteNavbar () {
  return (
    <div >
        <MiniNavbar />
        <br />
      <Nav />
      <TabNavbar />
      <MiniNavbar2 />

    </div>
  );
};

