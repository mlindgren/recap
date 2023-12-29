const month_names = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
 
const data_fitness_activities = {
    labels: ["Walking", "Running", "Skiing", "Snowboarding", "Bouldering", "Hiking", "Cycling", "Swimming", "Other"],
    datasets: [{
        label: "hours",
        data: [53.3, 36.5, 26.3, 23.9, 20.4, 13.2, 7.8, 1.8, 2.8],
        color: "#fff",
        backgroundColor: "rgb(255, 255, 255, 0.5)"
    }]
};

const data_fitness_monthly = {
    labels: month_names,
    datasets: [{
        label: "hours",
        yAxisID: "hours",
        data: [20, 16, 19.66, 15.66, 12, 6, 15.66, 15.5, 15, 22, 13, 15],
        // color: "#fff",
        // backgroundColor: "rgb(255, 255, 255, 0.5)"
    },
    {
      label: "miles",
      yAxisID: "miles",
      data: [150, 124, 137, 72, 59, 12, 76, 38, 59, 72, 51, 107]  
    }]
};

// From https://www.chartjs.org/docs/latest/samples/bar/horizontal.html
const config_template_horizontal = {
    type: 'bar',
    // data: data, // Set this property for each individual chart
    options: {
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        // title: {
        //   display: true,
        //   text: 'Chart.js Horizontal Bar Chart'
        // }
      }
    },
};

const config_template_vertical = {
  type: 'bar',
  // data: data, // Set this property for each individual chart
  options: {
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
      // title: {
      //   display: true,
      //   text: 'Chart.js Horizontal Bar Chart'
      // }
    }
};

var config_fitness_monthly = config_template_vertical;
config_fitness_monthly.data = data_fitness_monthly;
config_fitness_monthly.options.scales = {
  hours: {
    position: "left",
    text: "hours"
  },
  miles: {
    position: "right",
    text: "miles"
  }
};

Chart.defaults.color = "#fff";

new Chart(document.getElementById("chart-fitness-activities"), config_template_horizontal).data = data_fitness_activities;
new Chart(document.getElementById("chart-fitness-monthly"), config_fitness_monthly);
