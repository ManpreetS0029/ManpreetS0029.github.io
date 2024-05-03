import React from 'react';

import classes from './company.module.css';
import company from '../asset/company.png';
import Card from '../UI/Card';
import ExperienceData from '../../Data/ExperienceData';
import { useSelector } from 'react-redux';

function Experience(props) {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  return (
    <div className={classes.degreeMain}>
      <h1 style={{ color: nonThemeColor }}>Experience</h1>

      {ExperienceData.map((item) => (
        <div className={classes.degreeCard}>
          <div
            className={`${classes.degreeImage} centered`}
            style={{ borderColor: uiColor }}
          >
            <img src={company} alt="degree" srcset="" />
          </div>
          <Card className={classes.degreeWrapper}>
            <div className={classes.degreeInfo}>
              <h3 style={{ color: nonThemeColor }}>
                {item.startDate} - {item.endDate}
              </h3>
              <h1 style={{ color: uiColor }}>{item.companyName}</h1>
              <h2 style={{ color: nonThemeColor }}>{item.jobRole}</h2>
            </div>
            <ul className={classes.details}>
              {item.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Experience;
