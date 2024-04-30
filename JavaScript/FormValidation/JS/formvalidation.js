function validate()
{
    var firstName=document.getElementById("firstName");
    var lastName=document.getElementById("lastName");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var password=document.getElementById("password");
    var gender=false;
    for(var i=0;i<document.getElementsByName("gender").length;i++)
    {
        if(document.getElementsByName("gender")[i].checked==true)
        {
            gender=true;
            break;
        }
    }
    var address=document.getElementById("address");
    var dob=document.getElementById("dob");
    var language=false;
    for(var i=0;i<document.getElementsByName("languages[]").length;i++)
    {
        if(document.getElementsByName("languages[]")[i].checked==true)
        {
            language=true;
            break;
        }
    }
    var fieldOfInterests=false;
    for(var i=0;i<document.getElementsByName("fieldOfInterest[]")[0].length;i++)
    {
        if(document.getElementsByName("fieldOfInterest[]")[0].options[document.getElementsByName("fieldOfInterest[]")[0].selectedIndex]!=undefined)
        {
            fieldOfInterests=true;
            break;
        }
    }
    
    var photo=document.getElementById("photo");
    
    if((/[^a-zA-Z]/.test(firstName.value.trim()) || !(firstName.value!=""))  || (/[^a-zA-Z]/.test(lastName.value.trim()) || !(lastName.value!="")))
    {
        document.getElementsByClassName("name")[0].style.display="block";
        return false;
    }
    else if(!(/^([\w\-\.]+)@([\w-]+\.)+[\w-]{2,}$/).test(email.value))
    {
        document.getElementsByClassName("email")[0].style.display="block";
        return false;
    }
    else if(!(/^[6789]\d{9}$/).test(phone.value))
    {
        document.getElementsByClassName("phone")[0].style.display="block";
        return false;
    }
    // else if(!(/([\d][$!@%]){8}/).test(password.value.trim()))
    // {
    //     document.getElementsByClassName("password")[0].style.display="block";
    //     return false;
    // }
    else if(!(gender))
    {
        document.getElementsByClassName("gender")[0].style.display="block";
        return false;
    }
    else if(!(address.value.trim()!=""))
    {
        document.getElementsByClassName("address")[0].style.display="block";
        return false;
    }
    else if(!(dob.value!=""))
    {
        document.getElementsByClassName("dob")[0].style.display="block";
        return false;
    }
    else if(!(language))
    {
        document.getElementsByClassName("languages")[0].style.display="block";
        return false;
    }
    else if(!(fieldOfInterests))
    {
        document.getElementsByClassName("fieldOfInterest")[0].style.display="block";
        return false;
    }
    else{
        
        var result=getElementById("result");
        result.style.display="block";
        return true;
    }
}
function resetValid()
{
    var invalid=document.querySelectorAll(".invalid");
    for(var i=0;i<invalid.length;i++)
    {
        invalid[i].style.display="none";
    }
}