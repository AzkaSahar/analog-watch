let hr=document.getElementById("hour");
let min=document.getElementById("minutes");
let sec=document.getElementById("second");

function displayTime(){
    let date=new Date();
    //console.log(date);
    let hh=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    //console.log(hh,m,s);

    let hrotation=30*hh +m/2;
    let mrotation=6*m;
    let srotation=6*s;
    console.log(hrotation,mrotation,srotation);

    hr.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;

}

setInterval(displayTime,1000);