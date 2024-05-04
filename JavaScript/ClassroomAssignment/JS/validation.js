let category=document.getElementById("category");


let book=document.getElementById("book");
let email=document.getElementById("email");
let authorName=document.getElementById("name");
let published=document.getElementById("published");
let price=document.getElementById("price");

function validate()
{
    if(category.value.toString()=="Select")
    {
        document.getElementsByClassName("category")[0].style.display="inline";
        return false;
    }
    else if(!(/[\w\+][^0-9]{2,20}/).test(book.value))
    {
        document.getElementsByClassName("book")[0].style.display="inline";
        return false;
    }
    else if(!(/^([\w\-\.]+)@([\w-]+\.)+[\w-]{2,}$/).test(email.value))
    {
        document.getElementsByClassName("email")[0].style.display="inline";
        return false;
    }
    else if(!(/[a-zA-Z][^0-9]{3,20}/).test(authorName.value))
    {
        document.getElementsByClassName("name")[0].style.display="inline";
        return false;
    }
    else if(!(/^([1-2])+([0-9]{3})$/).test(published.value))
    {
        document.getElementsByClassName("published")[0].style.display="inline";
        return false;
    }
    else if(!(/(\d{1,})\.(\d{1,})/).test(price.value))
    {
        document.getElementsByClassName("price")[0].style.display="inline";
        return false;
    }
    else{
        alert("Form Submmited");
        let main = document.getElementById("main");
        main.style.display="none";

        let output=document.getElementById("output");
        output.style.display="block";
        
        let bookName=document.getElementById("bookName");
        let categorySpan=document.getElementById("outputCategory");
        let bookSpan=document.getElementById("outputBook");
        let emailSpan=document.getElementById("outputEmail");
        let authorNameSpan=document.getElementById("outputAuthor");
        let publishedYearSpan=document.getElementById("outputPublished");
        let priceSpan=document.getElementById("outputPrice");
        let copyrightYearSpan=document.getElementById("copyright");

        bookName.innerHTML=`${book.value} Book Details`;
        categorySpan.innerHTML=`${category.value}`;
        bookSpan.innerHTML=`${book.value}`;
        emailSpan.innerHTML=`${email.value}`;
        authorNameSpan.innerHTML=`${authorName.value}`;
        publishedYearSpan.innerHTML=`${published.value}`;
        priceSpan.innerHTML=`${price.value}`;
        copyrightYearSpan.innerHTML=`${new Date().getFullYear()}`;
        return false;
    }
}