var favactor="rajini"      //Function
var favplayer="Dhoni"
var favmovie="Dhoni's untold story"
function fav() {
  console.log("favactor:"+favactor)
  console.log("favplayer:"+favplayer)
  console.log("favmovie:"+favmovie)  
}
fav()

var l=12  
var b=4
function area(l,b){
  var total=l*b
  console.log("Total area="+total)
}
area(12,4)

function add(a,b){  //Return function
  return a+b
}
var addition= add(2,5)
console.log("Total="+addition)


var homework= "red"
if(homework=="red") {
  console.log("Stop")
}
if(homework=="Yellow") {
  console.log("Start your engine")
}
if(homework=="Green") {
  console.log("GO")
}
else{
  console.log("error")
}

for(num=1;num<=5;num=num+1){
  console.log(num)
}

for(num=5;num>=0;num=num-1){
  console.log(num)
}