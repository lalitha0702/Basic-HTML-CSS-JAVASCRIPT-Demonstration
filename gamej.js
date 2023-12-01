let playersym="X";
let gamend=false;


for (let i=1;i<=9;i++){
    document.getElementById(i.toString()).addEventListener("click",function(){
        if (this.innerHTML === "" && !gamend){
            this.innerHTML = playersym;
            this.classList.add(playersym.toLowerCase());
        }
        checkWin();
        if (playersym === "X")
            playersym = "O"
        else
            playersym = "X"
        
        
    }
    );
}

let win = [
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
];
flag=1;
function checkWin() {
    for (let i=0;i<win.length;i++){
        if (document.getElementById(win[i][0]).innerHTML == playersym && document.getElementById(win[i][1]).innerHTML == playersym &&
            document.getElementById(win[i][2]).innerHTML == playersym) {
                flag=1;
                document.getElementById(win[i][0]).classList.add("win");
                document.getElementById(win[i][1]).classList.add("win");
                document.getElementById(win[i][2]).classList.add("win");
                gamend=true;

                setTimeout(function() {
                    alert(playersym + " lost!!!");
                },500);
            }
        else{flag=0;}

        }
        if(flag==0){
        b1=document.getElementById("1").innerHTML;
            b2=document.getElementById("2").innerHTML;
            b3=document.getElementById("3").innerHTML;
            b4=document.getElementById("4").innerHTML;
            b5=document.getElementById("5").innerHTML;
            b6=document.getElementById("6").innerHTML;
            b7=document.getElementById("7").innerHTML;
            b8=document.getElementById("8").innerHTML;
            b9=document.getElementById("9").innerHTML;
            if((b1=='X' || b1=='O') && (b2=='X' || b2=='O') && (b3=='X' || b3=='O') && (b4=='X' || b4=='O') && (b5=='X' || b5=='O') &&
            (b6=='X' || b6=='O') && (b7=='X' || b7=='O') && (b8=='X' || b8=='O') && (b9=='X' || b9=='O')){
                alert("Match Tied!!!");}
        
    }
}


document.getElementById("reset").addEventListener("click",function(){
    for (let i=1;i<=9;i++) {
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).classList.remove("x");
        document.getElementById(i.toString()).classList.remove("o");
        document.getElementById(i.toString()).classList.remove("win");
        gamend = false;
    }
});