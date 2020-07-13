const DATE_ATTRIBUTE_IN_MONTHS = `/gdc/md/${process.env.REACT_APP_PROJECT_ID}/obj/2142`;
const GROSS_PROFIT_MEASURE = `/gdc/md/${process.env.REACT_APP_PROJECT_ID}/obj/6877`;
const DATE_ATTRIBUTE = `/gdc/md/${process.env.REACT_APP_PROJECT_ID}/obj/2180`;

export const months = [
  { name: 'January', value: 1 },
  { name: 'February', value: 2 },
  { name: 'March', value: 3 },
  { name: 'April', value: 4 },
  { name: 'May', value: 5 },
  { name: 'June', value: 6 },
  { name: 'July', value: 7 },
  { name: 'August', value: 8 },
  { name: 'September', value: 9 },
  { name: 'October', value: 10 },
  { name: 'November', value: 11 },
  { name: 'December', value: 12 },
];

export const measures = [
  {
    measure: {
      localIdentifier: 'm1',
      definition: {
        measureDefinition: {
          item: {
            uri: GROSS_PROFIT_MEASURE,
          },
        },
      },
      alias: '$ Gross Profit',
    },
  },
];

export const viewBy = {
  visualizationAttribute: {
    displayForm: {
      uri: DATE_ATTRIBUTE_IN_MONTHS,
    },
    localIdentifier: 'a1',
  },
};

export const getMonthFilter = (month) => {
  const firstDay = new Date(2016, month - 1, 1);
  const lastDay = new Date(2016, month, 0);

  return [
    {
      absoluteDateFilter: {
        dataSet: {
          uri: DATE_ATTRIBUTE,
        },
        from: `2016-${month}-${firstDay.getDate()}`,
        to: `2016-${month}-${lastDay.getDate()}`,
      },
    },
  ];
};
