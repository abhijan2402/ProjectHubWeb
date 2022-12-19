const EmailValidate=(email)=>{
    if(email.match(/\s/)){
        return false;
    }
    if(!email.includes("gmail.com")){
        return  false
    }
    return true
}
export default EmailValidate