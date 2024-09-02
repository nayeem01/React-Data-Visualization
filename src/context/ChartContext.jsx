import { createContext, useState } from "react";
import PropTypes from "prop-types";

import data from "./data";

export const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chartTitle, setChartTitle] = useState("");
  const [chartItem, setChartItem] = useState({});
  const [showCharts, setShowCharts] = useState([]);

  // find by index and store the chart in chartItem
  const findChart = (index) => {
    if (index >= 0 && index < data.length) {
      const chart = data[index];
      setChartItem(chart);
    } else {
      setChartItem({});
    }
  };

  //add the chart to showCharts list
  //check if the chartItem has a title and set the title to chartTitle

  const addChart = () => {
    if (chartItem && chartItem.options?.title?.text) {
      chartItem.options.title.text = chartTitle;
      setChartItem(chartItem);
    }

    setShowCharts((prevCharts) => {
      if (
        chartItem &&
        Object.keys(chartItem).length > 0 &&
        !prevCharts.some((chart) => chart.id === chartItem.id)
      ) {
        return [...prevCharts, chartItem];
      }

      setChartItem({});
      return prevCharts;
    });
  };

  //delete the chart from showCharts list
  const deleteChart = (index) => {
    setShowCharts((prevCharts) => prevCharts.filter((_, i) => i !== index));
  };

  const deleteAllCharts = () => {
    setShowCharts([]);
  };

  return (
    <ChartContext.Provider
      value={{
        chartItem,
        setChartTitle,
        showCharts,
        findChart,
        addChart,
        deleteChart,
        deleteAllCharts,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};

ChartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
