// for each button create a function for changing the color when click
var count = 1;

//for button one
function myFunction1() {
        var property = document.getElementById("one");
        if (count == 0) {
            property.style.backgroundColor = "#EBFF0A"
            document.getElementById("one").value="yellow";
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#3F51F1"
            document.getElementById("one").value="blue";
            count = 0;
        }
    }

    // for button two
    function myFunction2() {
        var property = document.getElementById("two");
        if (count == 0) {
            property.style.backgroundColor = "#EBFF0A"
            document.getElementById("two").value="yellow";
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#3F51F1"
            document.getElementById("two").value="blue";
            count = 0;
        }
    }

    //for button three
    function myFunction3() {
        var property = document.getElementById("three");
        if (count == 0) {
            property.style.backgroundColor = "#EBFF0A"
            document.getElementById("three").value="yellow";
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#3F51F1"
            document.getElementById("three").value="blue";
            count = 0;
        }
    }

    // for button four
    function myFunction4() {
        var property = document.getElementById("four");
        if (count == 0) {
            property.style.backgroundColor = "#EBFF0A"
            document.getElementById("four").value="yellow";
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#3F51F1"
            document.getElementById("four").value="blue";
            count = 0;
        }
    }
    
    // for setting a timer
    var myVar = setInterval(myTimer ,1000);
    var i=20;
function myTimer() {
  document.getElementById("mycounter").innerHTML = i;
  i--;
  if(i==0){
      window.open("final.html");
  }
}

// for checking a color is matching or not in first level
function myFunc(){
    let pro1 = document.getElementById("one1").value;
    let pro2 = document.getElementById("two1").value;
    let pro3 = document.getElementById("three1").value;
    let pro4 = document.getElementById("four1").value;
    let property1 = document.getElementById("one").value;
    let my1=property1.toString();
    let property2 = document.getElementById("two").value;
    let my2=property2.toString();
    let property3 = document.getElementById("three").value;
    let my3=property3.toString();
    let property4 = document.getElementById("four").value;
    let my4=property4.toString();
    if(my1==pro3 && my2==pro4 && my3==pro1 && my4==pro2){
                       window.open("index2.html","_self");
                }
                else{
                    window.open("final1.html","_self");
                }
}

// for checking a color is matching or not in second level
function myFunc1(){
    let pro1 = document.getElementById("one2").value;
    let pro2 = document.getElementById("two2").value;
    let pro3 = document.getElementById("three2").value;
    let pro4 = document.getElementById("four2").value;
    let property1 = document.getElementById("one").value;
    let my1=property1.toString();
    let property2 = document.getElementById("two").value;
    let my2=property2.toString();
    let property3 = document.getElementById("three").value;
    let my3=property3.toString();
    let property4 = document.getElementById("four").value;
    let my4=property4.toString();
    if(my1==pro2 && my2==pro1 && my3==pro4 && my4==pro3){
                       window.open("index3.html","_self");
                }
                else{
                    window.open("final1.html","_self");
                }
}
function myFunc2(){
    let pro1 = document.getElementById("one3").value;
    let pro2 = document.getElementById("two3").value;
    let pro3 = document.getElementById("three3").value;
    let pro4 = document.getElementById("four3").value;
    let property1 = document.getElementById("one").value;
    let my1=property1.toString();
    let property2 = document.getElementById("two").value;
    let my2=property2.toString();
    let property3 = document.getElementById("three").value;
    let my3=property3.toString();
    let property4 = document.getElementById("four").value;
    let my4=property4.toString();
    if(my1==pro1 && my2==pro3 && my3==pro2 && my4==pro4){
                       window.open("index4.html","_self");
                }
                else{
                    window.open("final1.html","_self");
                }
            }
function myFunc3(){
    let pro1 = document.getElementById("one4").value;
    let pro2 = document.getElementById("two4").value;
    let pro3 = document.getElementById("three4").value;
    let pro4 = document.getElementById("four4").value;
    let property1 = document.getElementById("one").value;
    let my1=property1.toString();
    let property2 = document.getElementById("two").value;
    let my2=property2.toString();
    let property3 = document.getElementById("three").value;
    let my3=property3.toString();
    let property4 = document.getElementById("four").value;
    let my4=property4.toString();
    if(my1==pro3 && my2==pro1 && my3==pro4 && my4==pro2){
                       window.open("index5.html","_self");
                }
                else{
                    window.open("final1.html","_self");
                }
}
function myFunc4(){
    let pro1 = document.getElementById("one5").value;
    let pro2 = document.getElementById("two5").value;
    let pro3 = document.getElementById("three5").value;
    let pro4 = document.getElementById("four5").value;
    let property1 = document.getElementById("one").value;
    let my1=property1.toString();
    let property2 = document.getElementById("two").value;
    let my2=property2.toString();
    let property3 = document.getElementById("three").value;
    let my3=property3.toString();
    let property4 = document.getElementById("four").value;
    let my4=property4.toString();
    if(my1==pro1 && my2==pro2 && my3==pro3 && my4==pro4){
                       window.open("result.html","_self");
                }
                else{
                    window.open("final1.html","_self");
                }
}