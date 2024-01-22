
var a = prompt("Enter password");
if (a != "AnuKuL") {
    document.write("Worng user");
    document.body.style.display = "none";

}
else {
    document.write("LOGIN SUCCESSFULLY ");
    document.body.style.display = "block";
}


function check() {
    var text = document.getElementById("text");
    var checkbox = document.getElementById("auto");

    if (checkbox.checked == true) {
        text.innerHTML = "double  tap on the button (ADD,SUB, MUL,DIV)";
        text.style.color = "red";
        document.body.style.background = "#0558062e";

    }
    else {
        document.body.style.background = "#ffff0073";
        text.innerHTML = "if you want to enable auto mode click on checkbox";
        text.style.color = "black";
    }
}

function calAdd(fristnumber, secondnumber) {

    var a = parseFloat(fristnumber);
    var b = parseFloat(secondnumber);
    var x = document.getElementById("FN");
    var y = document.getElementById("SN");
    var z = document.getElementById("Mess");

   

    if (z.innerHTML == "Ansewer is nagative || float because first number is < second number") {
        z.innerHTML = "message";
    }
    else {
        z.innerHTML = "message";
    }

    if (x.value === "" || y.value === "") {
        alert("please give valid input ");
    }
    else {
        var v = document.getElementById("resul");
        v.style.fontSize = "25px";
        v.style.color = "green";
        var c = a + b;
        v.innerHTML = c;

        var his = document.getElementById("plus");
       
        his.innerHTML += '<br>' + a + "+" + b + "=" + c;

        //alert("Result=" + c);
    }
   


}
function AuTo(fristnumber, secondnumber) {
    var checkbox = document.getElementById("auto");
    if (checkbox.checked == true) {

        var a = parseFloat(fristnumber);
        var b = parseFloat(secondnumber);
        var x = document.getElementById("FN");
        var y = document.getElementById("SN");
        var c = a + b;
        x.value = c;
        y.value = " ";
        // var his = document.getElementById("his");
        // his.style.color = "green";
        // his.innerHTML += '<br>' + a + "+" + b + "=" + c;
    }
}

function calSub(fristnumber, secondnumber) {
    var a = parseFloat(fristnumber);
    var b = parseFloat(secondnumber);
    var x = document.getElementById("FN");
    var y = document.getElementById("SN");
    var z = document.getElementById("Mess");

    if (x.value === "" || y.value === "") {
        alert("please give valid input ");
    }


    else {
        
        

        if (a >= b) {
            var c = a - b;
            var v = document.getElementById("resul");
            v.innerHTML = c;
            v.style.fontSize = "25px";
            v.style.color = "black";

            if (v.style.color === "blue" || v.style.color === "green" || v.style.color === "crimson" || v.style.color === "black") {
                v.style.color = "brown";

                var his = document.getElementById("minu");
               
                his.innerHTML += '<br>' + a + "-" + b + "=" + c;
                
            }
        }
        else {

            z.innerHTML = "Ansewer is nagative || float because first number is < second number";
            var v = document.getElementById("resul");
            var his = document.getElementById("minu");

            v.style.fontSize = "25px";
            v.style.color = "black";

            if (v.style.color === "blue" || v.style.color === "green" || v.style.color === "crimson" || v.style.color === "black") {
                v.style.color = "brown";
             
            }

            var c = a - b;
            v.innerHTML = c;
            his.innerHTML += '<br>' + a + "-" + b + "=" + c;

        }

        // alert("Result=" + c);
    }
}
function AuTo1(fristnumber, secondnumber) {
    var checkbox = document.getElementById("auto");
    if (checkbox.checked == true) {

        var a = parseFloat(fristnumber);
        var b = parseFloat(secondnumber);
        var x = document.getElementById("FN");
        var y = document.getElementById("SN");
        var c = a - b;
        x.value = c;
        y.value = " ";
        // var his = document.getElementById("his");
        // his.style.color = "brown";
        // his.innerHTML += '<br>' + a + "-" + b + "=" + c;
    }
}

function calMul(fristnumber, secondnumber) {
    var a = parseFloat(fristnumber);
    var b = parseFloat(secondnumber);
    var x = document.getElementById("FN");
    var y = document.getElementById("SN");
    var z = document.getElementById("Mess");
    
    var his1 = document.getElementById("his1");  
   
    if (z.innerHTML == "Ansewer is nagative || float because first number is < second number") {
        z.innerHTML = "message";
    }
    else {
        z.innerHTML = "message";
    }

    if (x.value === "" || y.value === "") {
        alert("please give valid input ");
    }


    else {
        var v = document.getElementById("resul");
        var his = document.getElementById("multi");
        v.style.fontSize = "25px";
        v.style.color = "black";

        if (v.style.color === "blue" || v.style.color === "brown" || v.style.color === "green" || v.style.color === "black") {
            v.style.color = "crimson";
            
        }

       
        var c = a * b;

        v.innerHTML = c;
        his.innerHTML += '<br>' + a + "*" + b + "=" + c;

        // v.style.overflow="scroll";
        // alert("Result=" + c);
    }
}
function AuTo2(fristnumber, secondnumber) {
    var checkbox = document.getElementById("auto");
    if (checkbox.checked == true) {

        var a = parseFloat(fristnumber);
        var b = parseFloat(secondnumber);
        var x = document.getElementById("FN");
        var y = document.getElementById("SN");
        var c = a * b;
        x.value = c;
        y.value = " ";
        // var his = document.getElementById("his");
        // his.style.color = "crimson";
        // his.innerHTML += '<br>' + a + "*" + b + "=" + c;
    }
}
function calDiv(fristnumber, secondnumber) {
    var a = parseFloat(fristnumber);
    var b = parseFloat(secondnumber);
    var x = document.getElementById("FN");
    var y = document.getElementById("SN");
    var z = document.getElementById("Mess");

    if (x.value === "" || y.value === "") {
        alert("please give valid input ");
    }


    else {
        if (a >= b) {
            var c = a / b;
            var v = document.getElementById("resul");
            v.innerHTML = c;
            v.style.fontSize = "25px";
            v.style.color = "black";

            if( v.style.color === "brown" || v.style.color === "green" || v.style.color === "crimson" || v.style.color === "black")
            { v.style.color = "blue";
            var his = document.getElementById("divi");
           
            his.innerHTML += '<br>' + a + "/" + b + "=" + c;
        
        }
 
           
           
        }
        else {

            z.innerHTML = "Ansewer is nagative || float because first number is < second number";
            var v = document.getElementById("resul");
            var his = document.getElementById("divi");
            v.style.color = "black";

            if (v.style.color === "brown" || v.style.color === "green" || v.style.color === "crimson" || v.style.color === "black") {
                v.style.color = "blue";
                
            }
            var c = a / b;
            v.innerHTML = c;
            his.innerHTML += '<br>' + a + "/" + b + "=" + c;
          

        }
        // v.style.overflow="scroll";

        // alert("Result=" + c);
    }
}
function AuTo3(fristnumber, secondnumber) {
    var checkbox = document.getElementById("auto");
    if (checkbox.checked == true) {

        var a = parseFloat(fristnumber);
        var b = parseFloat(secondnumber);
        var x = document.getElementById("FN");
        var y = document.getElementById("SN");
        var c = a / b;
        x.value = c;
        y.value = " ";
        // var his = document.getElementById("his");
        // his.style.color = "blueS";
        // his.innerHTML += '<br>' + a + "/" + b + "=" + c;
    }
}
function resUlQ() {
    var x = document.getElementById("FN");
    var y = document.getElementById("SN");
    var s = document.getElementById("resul");
    var z = document.getElementById("Mess");
    if (z.innerHTML == "Ansewer is nagative || float because first number is < second number") {
        z.innerHTML = "message";
    }
    else {
        z.innerHTML = "message";
    }

    if (x.value == "" && y.value == "") {
        alert("Please give input");
        s.innerHTML = "RESULT";
        s.style.fontSize = "25px";
    }
    else {
        x.value = " ";
        y.value = " ";
        s.innerHTML = "RESULT";
        s.style.fontSize = "25px";
        s.style.color = "black";
    }

    //   s.style.overflow="auto";

}
function Del() {
    var x = document.getElementById("FN");
    var y = document.getElementById("SN");
    var s = document.getElementById("resul");
    s.innerHTML = "RESULT";
    s.style.fontSize = "25px"
    s.style.color = "black";
    var z = document.getElementById("Mess");
    if (z.innerHTML == "Ansewer is nagative || float because first number is < second number") {
        z.innerHTML = "message";
    }
    else {
        z.innerHTML = "message";
    }
    if (x.value == "" && y.value == " ") {
        alert("Please give input");
    }

    else if (y.value == "") {
        x.value = x.value.slice(0, -1);
        if (x.value == "") {
            alert("frist number is empty");
        }
    }
    else {
        y.value = y.value.slice(0, -1);
        if (y.value == "") {
            alert("second number is empty");
        }
    }
    //  x.value=x.value.slice(0,-1);
    //  y.value=y.value.slice(0,-1);
}
function sWaup() {
    var x = document.getElementById("FN");
    var y = document.getElementById("SN");
    var z = x.value;
    x.value = y.value;
    y.value = z;
}
function Clr() {
    var his = document.getElementById("his");
    his.innerHTML = " ";
}
function printDiv(divName) {
    var his = document.getElementById("his").innerHTML;
    var original= document.body.innerHTML;
    document.body.innerHTML =his;

    window.print();
   document.body.innerHTML = original;
}
 function show()
 {
    var hisd =document.getElementById("his1");
        if( hisd.style.visibility  == "hidden")
        {
            hisd.style.visibility  = "visible";
        }
        else{
            hisd.style.visibility= "hidden";
        }
 }

 function shoe(){
    var Sho=document.getElementById("Sho");
    var d=document.getElementById("his1");
   
    if(d.style.display == "none")
    {
        d.style.display= "block";
        Sho.style.backgroundColor="#1cecde";
        Sho.innerHTML = '<i class="fa fa-eye-slash" style="font-size:23px;"></i><b>HIDE HISTORY</b>';
    }
    else{
        d.style.display = "none";
        Sho.style.backgroundColor ="#f90e0e";
        Sho.innerHTML = '<i class="fa fa-eye" style="font-size:20px;"></i><b>SHOW HISTORY</b>';
        
    }
 }
