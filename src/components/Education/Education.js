import React, { Fragment } from 'react';

import EducationData from '../../Data/EducationData';
import Degree from './Degree';
import classes from './education.module.css';
import { useSelector } from 'react-redux';

function Education(props) {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);

  const languagesDone = EducationData.codingStatus;
  return (
    <Fragment>
      <div className={classes.educationHeader} id="education">
        <Degree />
      </div>
    </Fragment>
  );
}
export default Education;
