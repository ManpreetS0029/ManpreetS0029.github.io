import React, { Fragment } from 'react';

import Degree from './Degree';
import classes from './education.module.css';

function Education(props) {
  return (
    <Fragment>
      <div className={classes.educationHeader} id="education">
        <Degree />
      </div>
    </Fragment>
  );
}
export default Education;
