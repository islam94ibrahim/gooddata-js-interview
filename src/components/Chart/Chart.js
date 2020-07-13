import React, { Fragment } from 'react';
import { ColumnChart } from '@gooddata/react-components';

import classes from './Chart.module.css';

const Chart = (props) => {
  const { measures, filters, projectId, viewBy } = props;

  return (
    <Fragment>
      {props.children}
      <div className={classes.Chart}>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={projectId}
          viewBy={viewBy}
        />
      </div>
    </Fragment>
  );
};

export default Chart;
