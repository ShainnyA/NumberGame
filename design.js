var num = (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function findNumber()
{
    var numUser = parseInt(document.getElementById("n1").value);
    if(numUser == num)
    {
        let resultElement = document.getElementById("res");
        document.getElementById("res").textContent = "Congratulations!!! You guessed the number in "+count+" tries.";
        resultElement.style.color = "green";
    }
    else if(numUser > num)
    {
        let resultElement = document.getElementById("res");
        document.getElementById("res").textContent = "Try with the smaller number";
        resultElement.style.color = "red";
    }
    else
    {
        let resultElement = document.getElementById("res");
        document.getElementById("res").textContent = "Try with the greater number";
        resultElement.style.color = "red";
    }
    let resultElement = document.getElementById("tries");
    document.getElementById("tries").textContent = "Number of tries:" + count;
    count++;
    resultElement.style.color = "blue";
}


