document.addEventListener("DOMContentLoaded", function() {
    const ss1 = document.getElementById("boxsma1");
    const ss2 = document.getElementById("boxsma2");
    const ss3 = document.getElementById("boxsma3");
    const ss11 = document.getElementById("boxsma11");
    const ss22 = document.getElementById("boxsma22");
    const ss33 = document.getElementById("boxsma33");
    const text1 = document.getElementById("abouttext");
    const text2 = document.getElementById("abouttext1");
    const text3 = document.getElementById("abouttext2");

    // Use setTimeout to allow the browser to apply the initial state before adding the class
    setTimeout(() => {
        ss1.style.top = '20px'; // Set scaleX(1) to show the element
        ss1.style.transform = "rotate(-25deg)";
        ss1.style.opacity= "1";
        ss2.style.top = '20px'; // Set scaleX(1) to show the element
        ss2.style.transform = "rotate(-25deg)";
        ss2.style.opacity= "1";
        ss3.style.top = '20px'; // Set scaleX(1) to show the element
        ss3.style.transform = "rotate(-25deg)";
        ss3.style.opacity= "1";



        ss11.style.top = '20px'; // Set scaleX(1) to show the element
        ss11.style.transform = "rotate(25deg)";
        ss11.style.opacity= "1";
        ss22.style.top = '20px'; // Set scaleX(1) to show the element
        ss22.style.transform = "rotate(25deg)";
        ss22.style.opacity= "1";
        ss33.style.top = '20px'; // Set scaleX(1) to show the element
        ss33.style.transform = "rotate(25deg)";
        ss33.style.opacity= "1";
        text1.style.opacity="1"
        text2.style.opacity="1"
        text3.style.opacity="1"
    }, 100);
});