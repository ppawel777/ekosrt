(function () {
  'use strict'

  // Graphs
  const ctx = document.getElementById('trend_chart');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00',
        '09:00' 
      ],
      datasets: [{
        data: [
          0.2,
          0.25,
          0.27,
          0.28,
          0.29,
          0.21,
          0.22,
          0.22,
          0.22,
          0.25,
          0.26,
          0.27,
          0.21,
          0.20,
          0.2,
          0.2,
          0.2,
          0.2,
          0.28,
          0.22,
          0.22,
          0.22,
          0.22,
          0.22
        ],
        label: 'Метан (CH4)',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#FE0601',
        borderWidth: 2,
        // pointBackgroundColor: '#FE0601'
      },
      {
        data: [
          0.19,
          0.15,
          0.17,
          0.18,
          0.19,
          0.11,
          0.12,
          0.12,
          0.12,
          0.15,
          0.16,
          0.17,
          0.21,
          0.20,
          0.2,
          0.16,
          0.16,
          0.19,
          0.28,
          0.26,
          0.23,
          0.21,
          0.20,
          0.29
        ],
        label: 'Сероводород (H2S)',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#A2AAAD',
        borderWidth: 2,
        // pointBackgroundColor: '#A2AAAD'
      },
      {
        data: [
          0.28,
          0.10,
          0.26,
          0.10,
          0.19,
          0.11,
          0.12,
          0.20,
          0.29,
          0.29,
          0.20,
          0.10,
          0.21,
          0.20,
          0.29,
          0.19,
          0.19,
          0.16,
          0.28,
          0.21,
          0.29,
          0.10,
          0.29,
          0.16
        ],
        label: 'Оксид углерода (СО)',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#64E101',
        borderWidth: 2,
        // pointBackgroundColor: '#64E101'
      },
      {
        data: [
          0.10,
          0.15,
          0.15,
          0.10,
          0.19,
          0.21,
          0.22,
          0.10,
          0.19,
          0.19,
          0.20,
          0.20,
          0.29,
          0.26,
          0.25,
          0.10,
          0.21,
          0.24,
          0.22,
          0.26,
          0.23,
          0.20,
          0.16,
          0.19
        ],
        label: 'Аммиак (NH3)',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#9CBEE7',
        borderWidth: 2,
        // pointBackgroundColor: '#9CBEE7'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      elements: {
        point:{
            radius: 0
        }
      }
      // legend: {
      //   display: false
      // }
    }
  })
})();
