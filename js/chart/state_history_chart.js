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
        label: 'Изменение показателя за 24 часа',
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
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
      }
    }
  })
})();
