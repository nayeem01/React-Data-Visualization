const data = [
  {
    id: 1,
    name: "Bar Chart",
    options: {
      chart: {
        type: "bar",
      },
      title: {
        text: "Historic World Population by Region",
        align: "left",
      },
      subtitle: {
        text:
          "Source: <a " +
          'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
          'target="_blank">Wikipedia.org</a>',
        align: "left",
      },
      xAxis: {
        categories: ["Africa", "America", "Asia", "Europe"],
        title: {
          text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Population (millions)",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " millions",
      },
      plotOptions: {
        bar: {
          borderRadius: "50%",
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Year 1990",
          data: [631, 727, 3202, 721],
        },
        {
          name: "Year 2000",
          data: [814, 841, 3714, 726],
        },
        {
          name: "Year 2018",
          data: [1276, 1007, 4561, 746],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Line Chart",
    options: {
      chart: {
        type: "spline",
      },
      title: {
        text: "Monthly Average Temperature",
      },
      subtitle: {
        text:
          "Source: " +
          '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
          'target="_blank">Wikipedia.com</a>',
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        accessibility: {
          description: "Months of the year",
        },
      },
      yAxis: {
        title: {
          text: "Temperature",
        },
        labels: {
          format: "{value}°",
        },
      },
      tooltip: {
        crosshairs: true,
        shared: true,
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: "#666666",
            lineWidth: 1,
          },
        },
      },
      series: [
        {
          name: "Tokyo",
          marker: {
            symbol: "square",
          },
          data: [
            5.2,
            5.7,
            8.7,
            13.9,
            18.2,
            21.4,
            25.0,
            {
              y: 26.4,
              marker: {
                symbol:
                  "url(https://www.highcharts.com/samples/graphics/sun.png)",
              },
              accessibility: {
                description:
                  "Sunny symbol, this is the warmest point in the " + "chart.",
              },
            },
            22.8,
            17.5,
            12.1,
            7.6,
          ],
        },
        {
          name: "Bergen",
          marker: {
            symbol: "diamond",
          },
          data: [
            {
              y: 1.5,
              marker: {
                symbol:
                  "url(https://www.highcharts.com/samples/graphics/snow.png)",
              },
              accessibility: {
                description:
                  "Snowy symbol, this is the coldest point in the " + "chart.",
              },
            },
            1.6,
            3.3,
            5.9,
            10.5,
            13.5,
            14.5,
            14.4,
            11.5,
            8.7,
            4.7,
            2.6,
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Pie Chart",
    options: {
      chart: {
        type: "pie",
      },
      title: {
        text: "Egg Yolk Composition",
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              name: "Water",
              y: 55.02,
            },
            {
              name: "Fat",
              sliced: true,
              selected: true,
              y: 26.71,
            },
            {
              name: "Carbohydrates",
              y: 1.09,
            },
            {
              name: "Protein",
              y: 15.5,
            },
            {
              name: "Ash",
              y: 1.68,
            },
          ],
        },
      ],
    },
  },
];

export default data;
