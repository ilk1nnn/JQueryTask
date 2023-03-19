
function checkPasswordStrength(password) {
    // Set up the strength levels and corresponding messages
    const strengthLevels = {
        1: "Weak",
        2: "Moderate",
        3: "Normal",
        4: "Strong"
    };

    // Check the password against various criteria and assign a strength level
    let strengthLevel = 0;
    if (password.length >= 8) strengthLevel++;
    if (password.match(/[a-z]/)) strengthLevel++;
    if (password.match(/[0-9]/)) strengthLevel++;
    if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)) strengthLevel++;

    // Return the strength level and corresponding message
    return strengthLevels[strengthLevel];
}



function setCookie(name, value, seconds) {
    const d = new Date();
    d.setTime(d.getTime() + seconds * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


function getCookie(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


let namearray = [];
let emailarray = [];
let passwordarray = [];

$(document).ready(function () {


    function setCookie(name, value, seconds) {
        const d = new Date();
        d.setTime(d.getTime() + seconds * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }


    function getCookie(key) {
        let name = key + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }




    $("input").css("outline", "none");
    $("input").focus(function () {
        $(this).css("border", '0.9px solid #00bfff');
        $(this).css("transition", "1s");
    });
    $("input").blur(function () {
        $(this).css("border", '0.1px solid grey');
        $(this).css("transition", "1s");
    });


    $("#passwordinput").keypress(function () {
        let passwordS = checkPasswordStrength($(this).val());
        if (passwordS == "Weak") {
            $(".section1").css("border", '2px solid red');
            $(".section1").css("transition", "1s");
        }
        if (passwordS == "Moderate") {
            $(".section1").css("border", '2px solid red');
            $(".section2").css("border", '2px solid orangered');
            $(".section2").css("transition", "1s");
        }
        if (passwordS == "Normal") {
            $(".section1").css("border", '2px solid red');
            $(".section2").css("border", '2px solid orangered');
            $(".section3").css("border", '2px solid orange');
            $(".section3").css("transition", "1s");
        }
        if (passwordS == "Strong") {
            $(".section1").css("border", '2px solid red');
            $(".section2").css("border", '2px solid orangered');
            $(".section3").css("border", '2px solid orange');
            $(".section4").css("border", '2px solid green');
            $(".section4").css("transition", "1s");
        }
    });


    $("#submitbtn").click(function () {



        if (($("#nameinput").val() == "") || ($("#emailinput").val() == "") || ($("#passwordinput").val() == "")) {
            alert("All Section Are Required. Try Again");
        }
        else {


            if(emailarray.includes($("#emailinput").val())){
                alert("This Email is Exists.Try Another One");
                emailarray.pop($("#emailinput").val());
                namearray.pop($("#nameinput").val());
                passwordarray.pop($("#passwordinput").val());

            }
            else{
                namearray.push($("#nameinput").val());
                emailarray.push($("#emailinput").val());
                passwordarray.push($("#passwordinput").val());
                alert("Submitted Successfully");
            }

        }



    });


    $("#loginbtn").click(function () {


        if (($("#emailinput2").val() == "") || ($("#passwordinput2").val() == "")) {
            alert("All Section Are Required. Try Again");
        }
        else{
            for (let i = 0; i < emailarray.length; i++) {
                if((emailarray[i] == $("#emailinput2").val()) &&
                passwordarray[i] == $("#passwordinput2").val()){
                    alert(`Welcome back, ${namearray[i]}`);
                }
                else{
                    alert("Wrong Email Or Password");
                }
            }
        }


    })



})