var cb=200;
var c65=195;
var vdb=210;
var vt=710;

var total=0;
var check=1;

var gw;
var item;
var qua;

var adder=document.querySelector("#getme");
adder.addEventListener("click",getMe);

var by=document.querySelector("#out");
by.addEventListener("click",checkOut);

var cme=document.querySelector("#clr");
cme.addEventListener("click",clearMe);

function getMe(){
    item=document.querySelector("#item1").value;
    qua=parseFloat(document.querySelector("#entrybox").value);
    gw=document.querySelector("#writeme");

    if(Number.isNaN(qua) === true){
        alert("Only numbers are allowed !");
        check=0;
    }
    else if(qua<0){
        alert("Only Positive values are allowed !");
    }
    else{
        check=1;
    }

    if (check==1){
        switch(item){
            case "Chicken Biryani":
                var cbb=cb*qua;
                gw.value+="Chicken Biryani " + qua + "item(s) = " + cbb + "RS\r";
                total+=cbb;
                qua.value="";
                break;
            case "Chicken 65":
                var c65p=c65*qua;
                gw.value+="Chicken 65 " + qua + "item(s) = " + c65p + "RS\r";
                total+=c65p;
                qua.value="";
                break;
            case "Veg Dum Biryani":
                var vdbp=vdb*qua;
                gw.value+="Veg Dum Biryani " + qua + "item(s) = " + vdbp + "RS\r";
                total+=vdbp;
                qua.value="";
                break;
            case "Veg Thaali":
                var vtp=vt*qua;
                gw.value+="Veg Thaali " + qua + "item(s) = " + vtp + "RS\r";
                total+=vtp;
                qua.value="";
                break;
        }
    }
}

function checkOut(){
    gw.value+="------------------------------------------------------\r";
    gw.value+="TOTAL : " + total + "RS\r";
    gw.value+="------------------------------------------------------\r";
    gw.value+="Thank You for visiting!";
    total=0;
}

function clearMe(){
    gw.value="";
}