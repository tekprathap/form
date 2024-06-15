// variable store
function func() {
    var name=document.forms['myform']['name'].value
    var date=document.forms['myform']['date'].value
    var email=document.forms['myform']['email'].value
    var phonenumber=document.forms['myform']['tel'].value
    var gender=document.forms['myform']['Gender'].value
    var idtype=document.forms['myform']['idnum'].value
    var idnumber=document.forms['myform']['idnumber'].value
    var issuedate=document.forms['myform']['issuedate'].value
    var ideication=document.forms['myform']['ideication'].value
    var issuustate=document.forms['myform']['issuustate'].value
    
    // personal detail validation
    if (name==null || name=="") {

        document.getElementById('name').style.border="2px solid red"
        return false
    }
   
    else if (date==null || date=="") {
      
        document.getElementById('date').style.border="2px solid red"
        return false
        
    }
    else if (email==null || email=="") {
        document.getElementById('email').style.border="2px solid red"
        return false
    }
    else if (isNaN(phonenumber==null || phonenumber=="")) {
        document.getElementById('tel').style.border="2px solid red"
        return false 
    }
    else if (gender==null || gender=="") {
        document.getElementById('email').style.border="2px solid red"
        return false
    }
    else if (idtype==null || idtype=="") {
        document.getElementById('email').style.border="2px solid red"
        return false
    }
    else if (idnumber==null || idnumber=="") {
        document.getElementById('email').style.border="2px solid red"
        return false
    }
    else if (idnumbe==null || idnumbe=="") {
        document.getElementById('email').style.border="2px solid red"
        return false
    }
    else if (issuedate==null || issuedate=="") {
        document.getElementById('email').style.border="2px solid red"
        return false
    }
    else if (ideication==null || ideication=="") {
        document.getElementById('email').style.border="2px solid red"
        return false
    }
    
}