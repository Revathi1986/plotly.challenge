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



}
Plots("940")
