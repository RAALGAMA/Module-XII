// File: layout.js
// Description: Component for the overall layout of the application.

import { Fragment } from "react";
import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      {/* Render the main navigation component. */}
      <MainNavigation />
      {/* Render the main content of the layout. */}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
