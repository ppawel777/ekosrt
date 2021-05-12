const stateHistory_data = "data/post_monitoring_data.json";

const grid = {
  id: "grid",
  view: "datatable",
  scheme:{
    $change:function(item) {
      if (item.status == 'Тревога')
        item.$css = "highlight";
    }
  },
  css:"webix_header_border webix_data_border table-container",
  columns: [
    { id:"date", header:"Дата", fillspace:1 },
    { id:"time", header:"Время", fillspace:1 },
    { id:"value", header:"Значение показателя", fillspace:1 },
    { id:"status", header:"Состояние", fillspace:1 },
    { id:"comment", header:"Комментарий",fillspace:2 }
  ],
  autoheight: true,
  resizeColumn: true,
  resizeRow: true,
  scroll: false,
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
    container: "stateHistory_tableID",
    borderless: true,
    id: "state_history", 
    type:"clean", rows:[
      pagerA,
      grid
    ]
  });

  // $$("grid").getPager().clone({ container:"pagerB_here" });
  $$("grid").getPager().clone({ 
    container:"stateHistory_pagerID",
    template:"{common.first()} {common.pages()} {common.last()}"
  });
});
