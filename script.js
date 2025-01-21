const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

const decimalToBinary = (input) =>{
    const inputs = [];
    const qoutients = [];
    const remainders = [];

    if(input === 0){
        result.innerText = "0";
        return;
    }

    while(input > 0){
        const qoutient = Math.floor(input / 2);
        const remainder = input % 2;

        inputs.push(input);
        qoutients.push(qoutient);
        remainders.push(remainder);

        input = qoutient;
    }

    result.innerText = remainders.reverse().join("");
}


const checkUserInput = () => {
    if(!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0){
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};


convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkUserInput();
    }
})