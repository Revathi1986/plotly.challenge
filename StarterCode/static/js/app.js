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
