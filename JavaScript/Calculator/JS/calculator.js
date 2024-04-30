


var expression=document.getElementsByClassName("display")[0];

function display(input){
    expression.value += input;
}

function clearAll()
{
    expression.value="";
}


function calculate()
{
    try
    {
        expression.value=eval(expression.value);
    }
    catch(error)
    {
        expression.value="Invalid Input";
    }
}

function paranthesis()
{
    expression.value+="()";
}

function del()
{
    expression.value=expression.value.toString().slice(0,-1);
}