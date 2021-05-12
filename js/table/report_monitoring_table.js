const stateHistory_data = "data/report_data.json";

const grid = {
  id: "grid",
  view: "datatable",
  css:"webix_header_border webix_data_border table-container report-table",
  // rowHeight:41,
  // columnWidth: 100,
  columns: [
    { id:"stuff",
      header:[
        { text:"<span>Загрязняющее вещество</span>", rowspan:2, css: "report-table" }
      ],
      minWidth: 145,
      
    },
    { id:"placeX", 
      header:[
        { text:"Место отбора", colspan:2, css: "report-table" },
        { text: "X", css: "report-table" }
      ],
    },
    {
      id:"placeY",
      // header: ["","< class='report-table'>Y</>"]
      header: ["", { text:"Y", css: "report-table" }]
    },
    {
      id:"percent",
      header:[
        { text:"Погрешность", rowspan:2, css: "report-table" }
      ]
    },
    {
      id:"pdk",
      header:[
        { text:"ПДК р.з.", rowspan:2, css: "report-table" }
      ]
    },
    {
      id:"ndv",
      header:[
        { text:"НДВ", rowspan:2, css: "report-table" }
      ]
    },
    {
      id:"val_5m",
      header:[
        { text:"Макс.разовая за 5 мин.", rowspan:2, css: "report-table" }
      ]
    },
    {
      id:"val_20m",
      header:[
        { text:"Усредн.за 20 мин.", rowspan:2, css: "report-table" }
      ]
    },
    { id:"data_val_min", 
      header:[
        { text:"Текущая дата 31.12.2020", colspan:2, css: "report-table" },
        { text: "min", css: "report-table" }
      ],
    },
    {
      id:"data_val_max",
      header: ["", { text:"max", css: "report-table" }]
    },
    {
      id:"val_month",
      header:[
        { text:"Усредн.за месяц", rowspan:2, css: "report-table" }
      ]
    },
    {
      id:"doc",
      header:[
        { text:"Нормативный документ", rowspan:2, css: "report-table" }
      ],
      minWidth: 150
    },
    { id:"temp", 
      header:[
        { text:"Показатели среды", colspan:2, css: "report-table" },
        { text: "Темпер.воздуха", css: "report-table" }
      ],
      minWidth: 115
    },
    {
      id:"wind",
      header: ["",{ text:"Направл.ветра", css: "report-table" }],
      minWidth: 115
    },
  ],
  // autoheight: true,
  resizeColumn: true,
  resizeRow: true,
  // scrollX: false,
  // scroll: false,
  scrollX: true,
  scrollY: false,
  pager: "pagerA",
  url: stateHistory_data
};

const pagerA = {
  view: "pager",
  css: "paging-container",
  template:"{common.first()} {common.pages()} {common.last()}",
  id: "pagerA",
  size: 10,
  group: 5
};

webix.ready(function(){
  webix.ui({
    container: "reportMonitoring_tableID",
    borderless: true,
    id: "report", 
    type:"clean", rows:[
      // pagerA,
      grid,
      pagerA
    ]
  });

  // $$("grid").getPager().clone({ container:"pagerB_here" });
  // $$("grid").getPager().clone({ 
  //   container:"reportMonitoring_pagerID",
  //   template:"{common.first()} {common.pages()} {common.last()}"
  // });
});
