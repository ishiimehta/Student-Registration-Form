function val(){
    let form= document.StudentForm;
    if(form.firstname.value==""){
        alert("Enter your first name!");
        form.firstname.focus();
        return false;
    }
    if(form.lastname.value==""){
        alert("Enter your last name!");
        form.lastname.focus();
        return false;
    }
    if(form.date.value==""){
        alert("Enter the Date!");
        form.date.focus();
        return false;
    }
    if((form.gender[0].checked==false) && (form.gender[1].checked==false) && (form.gender[2].checked==false)){
    alert("Enter your gender!");
    return false;
}
if(form.addressone.value==""){
    alert("Enter your Address!");
    form.ad.focus();
    return false;
}
if(form.city.value==""){
    alert("Enter your City!");
    form.city.focus();
    return false;
}
if(form.province.value==""){
    alert("Enter your State/Province!");
    form.province.focus();
    return false;
}
if(form.postalcode.value==""){
    alert("Enter Postal Code!");
    form.postalcode.focus();
    return false;
}
if(form.email.value==""){
    alert("Enter E-mail!");
    form.email.focus();
    return false;
}

if(isNaN(form.mnum.value)){
alert('Please input numeric characters only');
      form.mnum.focus();
      return false;
}
if(form.mnum.value==""){
    alert("Enter Mobile Number!");
    form.mnum.focus();
    return false;
}
}