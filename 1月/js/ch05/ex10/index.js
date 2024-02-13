document.forms[0].address.value
const usewith = ()=>{
    with(document.forms[0]){
        name.value = "";
        address.value ="";
        email.value ="";
    }
}

const nowith =()=>{
    let f = document.forms[0];
    f.name.value ="";
    f.address.value = "";
    f.email.value ="";
}
//strictモード？？？