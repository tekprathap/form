var form=document.querySelector('#form');
var username=document.querySelector('#name');
var date=document.querySelector('#date');
var email=document.querySelector('#"email');
var phonenumber=document.querySelector('#tel');
var gender=document.querySelector('#Gender');
var idtype=document.querySelector('#Qcupation');
var idnumber=document.querySelector('#idnum');
var issuedate=document.querySelector('#idnumber');
var ideication=document.querySelector('#issuedate');
var issuustate=document.querySelector('#ideication');
var istate=document.querySelector('#issuustate');



// trim value

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    valeidate()
})

function valeidate() {
    const usernameval=username.value.trim();
    const datevalu=date.value.trim();
    const emailval=email.value.trim();
    const phonenumberval=phonenumber.value.trim();
    const genderval=gender.value.trim();
    const idtypeval=idtype.value.trim();
    const idnumberval=idnumber.value.trim();
    const issuedateval=issuedate.value.trim();
    const ideicationval=ideication.value.trim();
    const issuustateval= issuustate.value.trim();
    const istateval=istate.value.trim();

    if (usernameval==='') {
        seterror(username)
    }
    else{
        setsuccess(username)
    }
    if (datevalu==='') {
        seterror(date)
    }
    else{
        setsuccess(date)
    }
    if (emailval==='') {
        seterror(email)
    }
    else{
        setsuccess(email)
    }
    if (phonenumberval==='') {
        seterror(phonenumber)
    }
    else{
        setsuccess(phonenumber)
    }
    if (genderval==='') {
        seterror(gender)
    }
    else{
        setsuccess(gender)
    }
    if (idtypeval==='') {
        seterror(idtype)
    }
    else{
        setsuccess(idtype)
    }
    if (idnumberval==='') {
        seterror(idnumber)
    }
    else{
        setsuccess(idnumber)
    }
    if (issuedateval==='') {
        seterror(issuedate)
    }
    else{
        setsuccess(issuedate)
    }
    if (ideicationval==='') {
        seterror(ideication)
    }
    else{
        setsuccess(ideication)
    }
    if (issuustateval==='') {
        seterror(issuustat)
    }
    else{
        setsuccess(issuustat)
    }
    if (istateval==='') {
        seterror(istate)
    }
    else{
        setsuccess(istate)
    }


}


function seterror(element,message) {
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');

    errorelement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success ')
}
function setsuccess(element) {
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');

    errorelement.innerText="";
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error ')
}

