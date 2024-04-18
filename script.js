//function to create elements
function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classlist = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}
let container = element("div","container","","");
const h1 = element("h1","text-center","title","Countries Weather");
const row = element("div","row","","")

const response = fetch("https://restcountries.com/v3.1/all")
response.then((data)=>data.json())
.then((ele)=>{
    for(let i=0;i<ele.length;i++){
        const col = document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4"
        col.innerHTML=`
        <div class="card h-100 ">
        <div class= "card-header">
        <h5 class= "card-title text-center">${ele[i].name.common}</h5>
        </div>
        
        `
        row.append(col)
    }
})
container.append(row)
document.body.append(h1,container)