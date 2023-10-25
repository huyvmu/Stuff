function flipTo(digit, n){
    const current = digit.dataset["num"];
    digit.dataset["num"] = n;
    digit.querySelector(".front").dataset["content"] = current;
    digit.querySelector(".back").dataset["content"] = n;
    digit.querySelector(".under").dataset["content"] = n;
    digit.querySelectorAll(".flap").forEach((ele) =>{
        ele.style.display = "block;"
    });

    setTimeout(
        () => {
            digit.querySelector(".base").innerText = n;
            digit.querySelectorAll(".flap").forEach((ele) => 
            {
                ele.style.display = "none";
            });
        },
        350,
    );
}

function jumpTo(digit,n){
    digit.dataset["num"] = n;
    digit.querySelector(".base").innerText = n;
}

function updateGroup(group, n, flip){
    const digit1 = document.querySelector(".ten" + group);
    const digit2 = document.querySelector("." + group);
    n = String(n);
    if (n.length == 1) n = '0' + n;
    const num1 = n.substr(0, 1);
    const num2 = n.substr(1, 1);

    if (digit1.dataset["num"] != num1){
        if(flip){
            flipTo(digit1,num1);
        }else{
            jumpTo(digit1,num1)
        }
    }

    if(digit2.dataset["num"] != num2){
        if(flip){
            flipTo(digit2, num2);
        }else{
            jumpTo(digit2, num2);
        }
    }
}

function setTime(flip){
    const t = new Date();
    updateGroup("hour", t.getHours(),flip);
    updateGroup("min", t.getMinutes(),flip);
    updateGroup("sec", t.getSeconds(),flip);
}

setTime(false);
setInterval(
    ()  => {
        setTime(flip = true);
    },
    handler= 1000,
);
