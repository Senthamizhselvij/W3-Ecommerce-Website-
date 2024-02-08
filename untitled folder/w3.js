course = [];
function col(){
    document.getElementById('body').style.cssText='display: flex; height: 90%; width:100%;';
    document.getElementById('col1').style.cssText='width:80%; overflow: auto';
    document.getElementById('col2').style.cssText='border:5px solid; width:20%;';
    document.getElementById('col2a').style.cssText='border-bottom:5px solid; height:10%; display: flex; flex-direction: row; align-items: center; justify-content: center; font-size:30px; font-weight: bold; font-family: sans-serif;';
    document.getElementById('col2b').style.cssText='height:75%; display:flex; padding:20px;';
    document.getElementById('col2c').style.cssText = 'display: flex; align-items: center;';
}
function add(x,y){
    const existingCourse = course.find(course => course.price === y);
    if (existingCourse) {
        alert("This course has already been added");
      } else {
        course.push({ name: x, price: y });
        update();
        total();
      } 
}
function update(){
    var courselist = document.getElementById('courselist');
    courselist.innerHTML="";
    for(i=0; i<course.length; i++){
        var row = courselist.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.style.cssText = 'font-size:20px; font-weight: bold; font-family: sans-serif; width:80%';
        cell2.style.cssText = 'font-size:20px; font-weight: bold; font-family: sans-serif; width:20%';
        cell1.innerHTML = course[i].name;
        cell2.innerHTML = "Rs."+course[i].price;
    }
}
function total(){
    var totalamt = 0;
    for(i=0; i<course.length; i++){
        totalamt += course[i].price;
    }
    document.getElementById('col2ca').innerHTML = "Rs."+totalamt;
}
function remove(a){
    for(i=0; i<course.length; i++){
        if(course[i].price === a){
            course.splice(i,1);
        }
    }
    update();
    total();
}
function cancel(){
    document.getElementById('col2').style.cssText = 'visibility:hidden; display:none';
    document.getElementById('col1').style.cssText='width:100%;';
    del();
}
function del(){
    for(i=0; i<course.length; i++){
        course.splice(i);
    }
}
