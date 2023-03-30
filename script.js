function calculate(){
    let weight=document.getElementById('weightInput').value;
    let height=document.getElementById('heightInput').value;
    
    let flag = 0;
    if(!weight){
        document.getElementById('weightInput').required;
        flag = 1;
    }

    if(!height){
        document.getElementById('heightInput').required;
        flag = 1;
    }

    if(flag === 0){
        let bmi = parseFloat(weight)/parseFloat(height*height);
        bmi = bmi.toFixed(2);
        document.querySelector('#bmi').innerHTML=bmi;
        if(bmi < 18.5){
            document.querySelector('#message').innerText = "Your bmi falls within the underweight range";
        }else if((bmi > 18.5) && (bmi <= 24.9)){
            document.querySelector('#message').innerText = "Your bmi falls within the normal or healthy weight range";
        }else if((bmi >= 25) && (bmi <= 29.9 )){
            document.querySelector('#message').innerText = "Your bmi falls within the overweight range";
        }else{
            document.querySelector('#message').innerText = "Your bmi falls within the obese range";
        }
    }
}
