let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

const btn = document.querySelector(".ig");
const cancel_btn = document.querySelector(".cancel_btn");
const toast_box = document.querySelector(".toast_box");
const seconds = document.querySelector(".second");
let time = 5;
let interval;
let timeout;

btn.addEventListener("click",()=>{
    btn.setAttribute("disabled", "");
    time = 5;
    toast_box.style.transform="translate(0%)";
    interval= setInterval(() => {
        time -=1;
        seconds.innerHTML = '0${time}s';
    },1000);
    timeout = setTimeout(()=>{
        toast_box.style.transform = "translate(110%)";
        time = 5;
        seconds.innerHTML = '0${time}s';
        clearInterval(interval);
        btn.removeAttribute("disabled", "");
    }, 6000);
});
cancel_btn.addEventListener("click", ()=>{
    btn.removeAttribute("disabled", "");
    time = 5;
    toast_box.style.transform="translate(110%)";
    seconds.innerHTML = '0${time}s';
    clearInterval(interval);
    clearInterval(timeout);
});




// const clc = document.querySelector(".cencel");
// const arr = document.querySelector(".arr_container");
// const left_container = document.querySelector(".left_container");

// arr.addEventListener("click", ()=>{
//     arr.classList.add("active_arr");
//     if(left_container.classList.contains("off")){
//         left_container.classList.remove("off");
//         left_container.classList.add("active")
//     }
// });
// clc.addEventListener("click", ()=>{
//     arr.classList.remove("active_arr");
//     if(left_container.classList.contains("active")){
//         left_container.classList.remove("active");
//         left_container.classList.add("off")
//     }
// });