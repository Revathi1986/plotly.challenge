//const data = "sample.json";

////const dataPromise = d3.json(data)

//
//console.log("Data Promise:", dataPromise)
function Plots(sampleId){
    d3.json("samples.json").then(data => {
        console.log(data);
    var Filtereddata = data.samples.filter(g => g.id == sampleId);
    console.log(Filtereddata);
    var sample_values =Filtereddata[0].sample_values;
    console.log(sample_values);
    var otu_ids = Filtereddata[0].otu_ids;
    console.log(otu_ids)
    var otu_id_label= otu_ids.map(x=>"OTU" +x);
    var wFreq = data.metadata.Filter(g => g.id ==sampleId)
        
    }
    })
    var tracebar ={
        x: Sample_values.slice(0,10).reverse(),
        y: otu_id_label.slice(0,10).reverse(),
        text:otu_labels
        type:"bar"
        orientation: 'h'


    var dataBar =[traceBar];
    var layout Bar ={
        height : 500,
        width: 500

    }
    Plotly.newPlot('bar',dataBar,layout Bar);
    };

    var traceBubble ={
        x : otu_ids,
        y : Sample_values,
        mode: "markers",
        markeer:{
            size : Sample_values,
            color: otu_ids
        },
        text : otu_labels
    };
    var dataBubble =[traceBubble];

    var layoutBubble ={
        xaxis : {
            title : "OTU IDS"
        }
        height : 700,
        width : 1200

    }
    Plotly.newPlot("bubble", dataBubble,layoutBubble);
 // Creating trace for gauge chart
 var traceGauge = [
    {
      type: "scatter",
      x: [0],
      y: [0],
      marker: { 
          size: 12, color: "850000" 
        },
      showlegend: false,
      name: "Washes",
      text: wfreq,
      hoverinfo: "text+name"
    },
    {
      values: [1, 1, 1, 1, 1, 1, 1, 1 ,1, 9],
      rotation: 90,
      text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
      textinfo: "text",
      textposition: "inside",
      marker: {
        colors: [
          "rgba(0, 105, 11, .5)",
          "rgba(10, 120, 22, .5)",
          "rgba(14, 127, 0, .5)",
          "rgba(110, 154, 22, .5)",
          "rgba(170, 202, 42, .5)",
          "rgba(202, 209, 95, .5)",
          "rgba(210, 206, 145, .5)",
          "rgba(232, 226, 202, .5)",
          "rgba(240, 230, 215, .5)",
          "rgba(255, 255, 255, 0)"
        ]
      },
      labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
      hoverinfo: "label",
      hole: 0.5,
      type: "pie",
      showlegend: false
    }
  ];

// Creating layout for gauge chart
var layoutGauge = {
shapes: [
    {
    type: "path",
    path: path,
    fillcolor: "850000",
    line: {
        color: "850000"
    }
    }
],
title: "<b>Belly Button Washing Frequency</b> <br>Scrubs per Week",
height: 700,
width: 700,
xaxis: {
    zeroline: false,
    showticklabels: false,
    showgrid: false,
    range: [-1, 1]
},
yaxis: {
    zeroline: false,
    showticklabels: false,
    showgrid: false,
    range: [-1, 1]
}
};

// Plot gauge chart
Plotly.newPlot('gauge', traceGauge, layoutGauge); 
});

}