const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"
let sample =[];
let sample_value=[];
let otu_id = [];
let ids = [];
let otu_values={}
let pair=[];


d3.json(url).then(function(data) {
  sample= data.samples
  pair=data.metadata
    for (let i=0;i<sample.length;i++){
       if (sample[i].sample_values.length>=10){
         sample_value.push(sample[i].sample_values.slice(0,10))};
        if (sample[i].otu_ids.length>=10){
         otu_id.push(sample[i].otu_ids.slice(0,10).map(item=>("otu"+item)));
         ids.push(sample[i].id);}}

        
 otu_values= {"id":ids,"sample_value":sample_value,"otu_id":otu_id};

function init() {
    let dat = [{
      x:sample_value[0],
      y:otu_id[0],
      text:sample[0].otu_labels,
      type: 'bar',
      orientation: 'h'
}];
  
let layout = {
  title: "Top 10 Bacteria Cultures Found",
  height:350,
  width:350
};
  
    Plotly.newPlot("bar", dat, layout);
  }
  init();
  /////
  var trace1 = {
    x:sample[0].sample_values,
    y: sample[0].otu_ids,
    text:sample[0].otu_labels,
    mode: 'markers',
    marker: {
      size:sample[0].sample_values,
      color:sample[0].otu_ids
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'OTU',
    showlegend: false,
    height: 500,
    width: 900
  };
  
  Plotly.newPlot('bubble', data, layout);
  ////
  
 
for(let i=0; i<ids.length;i++){
var el = document.createElement("option");
el.text = ids[i];
el.value = ids[i];
var select = document.getElementById("selDataset");
select.appendChild(el);}
})
//display key,value pair
let pair_data={} 
let meta_data={}
//define function optionChanged
function optionChanged(arg){
  

for(let j=0;j<otu_values.id.length;j++){
  if (otu_values.id[j] === arg) {
    x1 =otu_values.sample_value[j];
    y1 = otu_values.otu_id[j];
    }}
  for(let k=0;k<sample.length;k++){
    if (sample[k].id === arg) {
      x2 =sample[k].otu_ids;
      y2 = sample[k].sample_values; 
      
  }
}
  for(let m=0;m<pair.length;m++){
     

      if (pair[m].id == arg) {
      
      meta_data = pair[m];

       document.getElementById('value1').innerHTML =  "id: "+meta_data.id;
       document.getElementById('value2').innerHTML ="ethnicity: "+meta_data.ethnicity ;
       document.getElementById('value3').innerHTML =  "gender :"+meta_data.gender;
       document.getElementById('value4').innerHTML ="age: "+meta_data.age ;
       document.getElementById('value5').innerHTML =  "location: "+meta_data.location;
       document.getElementById('value6').innerHTML ="bbtype: "+meta_data.bbtype ;
       document.getElementById('value7').innerHTML =  "wfreq: "+meta_data.wfreq;

  }
 
}  
     
Plotly.restyle("bar", "x", [x1]);
Plotly.restyle("bar", "y", [y1]);
Plotly.restyle("bubble", "x", [x2]); 
Plotly.restyle("bubble", "y", [y2]);
};



  