// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import Layout from '../../components/UI/Layout/Layout';
import Chart from '../../components/Chart/Chart';
import Select from '../../components/UI/Select/Select';
import { months } from '../../utils/helper';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths =
  '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {
  constructor(props) {
    super(props);

    this.monthChangedHandler = this.monthChangedHandler.bind(this);

    this.state = {
      month: 1,
    };
  }

  getMonthFilter = () => {
    const firstDay = new Date(2016, this.state.month - 1, 1);
    const lastDay = new Date(2016, this.state.month, 0);

    return [
      {
        absoluteDateFilter: {
          dataSet: {
            uri: dateAttribute,
          },
          from: `2016-${this.state.month}-${firstDay.getDate()}`,
          to: `2016-${this.state.month}-${lastDay.getDate()}`,
        },
      },
    ];
  };

  getMeasures() {
    return [
      {
        measure: {
          localIdentifier: 'm1',
          definition: {
            measureDefinition: {
              item: {
                uri: grossProfitMeasure,
              },
            },
          },
          alias: '$ Gross Profit',
        },
      },
    ];
  }

  getViewBy() {
    return {
      visualizationAttribute: {
        displayForm: {
          uri: dateAttributeInMonths,
        },
        localIdentifier: 'a1',
      },
    };
  }

  renderDropdown() {
    return (
      <select defaultValue="1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    );
  }

  monthChangedHandler = (e) => {
    this.setState({ month: e.target.value });
  };

  render() {
    const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
    const filters = this.getMonthFilter();
    const measures = this.getMeasures();
    const viewBy = this.getViewBy();

    return (
      <Layout>
        <Chart measures={measures} filters={filters} projectId={projectId}>
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
