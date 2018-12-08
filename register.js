function validateform() {
  var Username = document.forms['MyForm']['Username'].value;
  var Email    = document.forms['MyForm']['Email'].value;
  var Password = document.forms['MyForm']['Password'].value;
  var RetypePass = document.forms['MyForm']['RetypePass'].value;
  
  var submit = document.forms['MyForm']['submit'].value;
    
    
    if(Username == "") {
        alert("სახელი არ არის შეყვანილი");
          return false;
    }//Username Is Empty
  
      if(Email == "") {
        alert("ელ-ფოსტა არ არის შეყვანილი");
          return false;
    }//Email Is Empty
  
    if(Password == "") {
        alert("პაროლი არ არის შეყვანილი");
          return false;
    }//Password Is Empty
  
        if(Password == RetypePass){                   
        }else{
           alert('პაროლი არ ემთხვევა ერთმანეთს');
           return false;
        }//პაროლი არ ემთხვევა ერთმანეთს დამთავრება 
         // Password Do Not Match

    
    if(Password.length <=6) {
       alert("პაროლი სუსტია");
          alert("პაროლი უნდა აღემატებოდეს 6 სიმბოლოს ");
             return false;
    }
  
    if(submit == "") {
      alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია');
        return false;
    }
}