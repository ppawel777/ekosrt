(function () {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart');
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
          0.28,
          0.25,
          0.27,
          0.28,
          0.29,
          0.19,
          0.10,
          0.22,
          0.20,
          0.29,
          0.26,
          0.15,
          0.21,
          0.25,
          0.23,
          0.27,
          0.19,
          0.22,
          0.28,
          0.25,
          0.24,
          0.18,
          0.15,
          0.22
        ],
        label: 'Изменение показателя за 24 часа',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#64E101',
        borderWidth: 2,
        // pointBackgroundColor: '#64E101'
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
      legend: {
        display: false
      },
      elements: {
        point:{
            radius: 0
        }
      }
    }
  })
})();
