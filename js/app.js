/* globals Chart:false, feather:false */

(function () {
  'use strict'

  // feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
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

const grid = {
  id:"grid",
  view:"datatable",
  columns:[
    { id:"package", header:"Name", fillspace:true },
    { id:"section", header:"Section", width:120 },
    { id:"size", header:"Size", width:80 },
    { id:"architecture", header:"PC", width:60 }
  ],
  select:"cell",
  autoheight:true,
  scroll:false,
  pager:"pagerA",
  url:"https://docs.webix.com/samples/server/packages"
};

const pagerA = {
  view:"pager",
  id:"pagerA",
  size:10,
  group:5
};

webix.ready(function(){
  webix.ui({
    container:"mainView",
    borderless:true,
    id:"demo", 
    type:"clean", rows:[
      pagerA,
      grid
    ]
  });

  $$("grid").getPager().clone({ container:"pagerB_here" });
});
