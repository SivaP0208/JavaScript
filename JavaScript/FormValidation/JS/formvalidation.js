function validate()
{
    var firstName=document.getElementById("firstName");
    var lastName=document.getElementById("lastName");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var password=document.getElementById("password");
    var gender="";
    for(var i=0;i<document.getElementsByName("gender").length;i++)
    {
        if(document.getElementsByName("gender")[i].checked==true)
        {
            gender=document.getElementsByName("gender")[i].value;
            break;
        }
    }
    var address=document.getElementById("address");
    var dob=document.getElementById("dob");
    var time=document.getElementById("time");
    var isLanguageChecked=false;
    var languages=new Array();
    for(var i=0;i<document.getElementsByName("languages[]").length;i++)
    {
        if(document.getElementsByName("languages[]")[i].checked==true)
        {
            isLanguageChecked=true;
            languages.push(document.getElementsByName("languages[]")[i].value);
        }
    }
    var isFieldOfInterestChecked=false;
    var fieldOfInterests=new Array();
    for(var option of document.getElementById("fieldInterest").options)
    {
        if(option.selected)
        {
            isFieldOfInterestChecked=true;
            fieldOfInterests.push(option.value);
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
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(password.value.trim()))
    {
        document.getElementsByClassName("password")[0].style.display="block";
        return false;
    }
    else if(!(gender!=""))
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
    else if(!(isLanguageChecked))
    {
        document.getElementsByClassName("languages")[0].style.display="block";
        return false;
    }
    else if(!(isFieldOfInterestChecked))
    {
        document.getElementsByClassName("fieldOfInterest")[0].style.display="block";
        return false;
    }
    else{
        
        alert("form submitted");
        var result=document.getElementById("result");
        var form=document.getElementById("form");
        form.style.display="none";

        document.getElementsByTagName("body")[0].style.border="none";
        document.getElementById("userName").innerHTML=firstName.value+" "+lastName.value;
        document.getElementById("userEmail").innerHTML=email.value;
        document.getElementById("userPhone").innerHTML=phone.value;
        document.getElementById("userPassword").innerHTML=password.value;
        document.getElementById("userGender").innerHTML=gender;
        document.getElementById("userAddress").innerHTML=address.value;
        document.getElementById("userDOB").innerHTML=dob.value;
        document.getElementById("userTime").innerHTML=time.value;
        var userLanguages=document.getElementById("userLanguages");
        languages.forEach(element => {
            userLanguages.innerHTML+=`<li>${element}</li>`;
        });
        var userFieldOfInterest=document.getElementById("userFieldInterest");
        fieldOfInterests.forEach(element => {
            userFieldOfInterest.innerHTML+=`<li>${element}</li>`;
        });
        document.getElementById("userPhoto").innerHTML=`<img src=\"Images/${photo.value}\" alt=\"My Photo\" width=\"20%\" height=\"20%\">`;
        result.style.display="block";

        return false;
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