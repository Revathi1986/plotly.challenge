//const data = "sample.json";

////const dataPromise = d3.json(data)

//
//console.log("Data Promise:", dataPromise)
function Plots(sampleId){
    d3.json("samples.json").then(data => {
        console.log(data);
    var Filtereddata = data.samples.filter(g => g.id == sampleId);
    console.log(Filtereddata);
    })



}
Plots("940")
