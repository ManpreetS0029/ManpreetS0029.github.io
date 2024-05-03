import React, { Fragment } from 'react';

import classes from './experience.module.css';
import Experience from './Company';

function Company(props) {
  return (
    <Fragment>
      <div className={classes.educationHeader} id="experience">
        <Experience />
      </div>
    </Fragment>
  );
}

export default Company;
