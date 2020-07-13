// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import Layout from '../../components/UI/Layout/Layout';
import Chart from '../../components/Chart/Chart';
import Select from '../../components/UI/Select/Select';
import { months, measures, viewBy, getMonthFilter } from '../../utils/helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.monthChangedHandler = this.monthChangedHandler.bind(this);

    this.state = {
      month: 1,
    };
  }

  monthChangedHandler = (e) => {
    this.setState({ month: e.target.value });
  };

  render() {
    const projectId = process.env.REACT_APP_PROJECT_ID;

    return (
      <Layout>
        <Chart
          measures={measures}
          filters={getMonthFilter(this.state.month)}
          projectId={projectId}
        >
          <h1>
            $ Gross Profit in month
            {
              <Select
                value={this.state.month}
                options={months}
                changed={this.monthChangedHandler}
              />
            }
            2016
          </h1>
        </Chart>
        <Chart measures={measures} viewBy={viewBy} projectId={projectId}>
          <h1>$ Gross Profit - All months</h1>
        </Chart>
      </Layout>
    );
  }
}

export default App;
