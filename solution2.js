let user_dob = new Date(prompt("enter date of birth :"));

let month_diff = Date.now() - user_dob.getTime();  

let age_dt = new Date(month_diff);   
      

let year = age_dt.getUTCFullYear();  
      
     
let age = Math.abs(year - 1970);  

if(age > 18 && age < 44){
    window.location.href = "https://selfregistration.cowin.gov.in";

}else{
    document.write("You are not qualified for registration");
}