import React from 'react';
import { Helmet } from 'react-helmet-async';

import { AppView } from '../sections/view';
import Navbar from '../sections/view/navbar';
// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Anshul Chaudhary </title>
      </Helmet>

      <Navbar />

      <br />

      <AppView />
    </>
  );
}