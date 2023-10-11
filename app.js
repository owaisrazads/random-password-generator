const passwordBox = document.getElementById("password");
const length = 8;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&*?/=+-";

const allcharacter = upperCase + lowerLase + number + symbol;


// password += symbol[Math.floor(Math.random() * symbol.length)];

    function createPassword() {
        let password = ""
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerLase[Math.floor(Math.random() * lowerLase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];


        while(length > password.length) {
                password += allcharacter[Math.floor(Math.random() * allcharacter.length)];
        }
        passwordBox.value = password;
        // console.log(createPassword);


        function copyPassword(){
            passwordBox.ariaSelect();
            document.execCommand("copy");
        }
    }