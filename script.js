const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');
const animationData = [
    {
        inputVal: 5,
        addElDelay: 1000,
        msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
        showMsgDelay: 15000,
        removeElDelay: 20000
    },
    {
        inputVal: 2,
        addElDelay: 1500,
        msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 10000,
        removeElDelay: 15000
    },
    {
        inputVal: 1,
        addElDelay: 2000,
        msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 5000,
        removeElDelay: 10000,
    }
];

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