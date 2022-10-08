import { Fragment } from 'react';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>

      <div className={classes.back}>
        <header className={classes.header}>
          <h1 className={classes.h1}>BuyCycles</h1>
        </header>
        <div className={classes.block}>
          <h2 className={classes.h2}>Currently Under Development</h2>
        </div>
        </div>

    </Fragment>
  );
};

export default Header;
