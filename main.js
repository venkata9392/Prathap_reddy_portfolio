var typed=new Typed(".text",{
    strings:["Full Stack Developer And","Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
document.querySelectorAll(".circle").forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const progress = circle.querySelector(".progress");
    const offset = 314 - (314 * percent) / 100;
    progress.style.strokeDashoffset = offset;
});