"use strict";
const a = 10;
//alert(a);

document.querySelector(".Register").addEventListener("click", function () {
  const Email = document.getElementById("email").value;
  const Username = document.getElementById("username").value;
  const Password = document.getElementById("password").value;
  const Phone = document.getElementById("phone").value;
  const DOB = new Date(document.getElementById("DateOfBirth").value);
  const Gender = document.getElementsByName("gender");
  const gend =Gender[0].value;

  const Foodtype = document.getElementById("foodtype").value;
  const smsalert = document.getElementById("smsalert").value;
  const Emailalert = document.getElementById("Emailalert").value;
  //   const Gender = document.getElementsByName("gender").value;

  const Reg =
    "Email : " +
    Email +
    "\n " +
    "Username : " +
    Username +
    "\n" +
    "PassWord : CONFIDENTIAL!" /*Password +*/ +
    "\n" +
    "Phone :" +
    Phone +
    "\n" +
    "DOB : " +
    DOB +
    "\n" +
    "Gender : " +
    gend +
    "\n" +
    "Foodtype : " +
    Foodtype +
    "\n" +
    "smsalert : " +
    smsalert +
    "\n" +
    "Emailalert : " +
    Emailalert +
    "\n";
  //const a =10;
  //   document.write(Reg);
  document.querySelector("#message").textContent = `${Reg}`;
  ("poda"); //Reg;
  //   document.querySelector('div').style.display = 'block';
  document.getElementById("message").style.display = "block";
  //.getElementsByClassName;
  //   .style.display ='block';
  //   document
});
