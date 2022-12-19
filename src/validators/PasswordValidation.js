const PasswordValidate=(Password)=>{
    var validRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if(!Password.match(validRegex)){
        return false;
    }
    return true
}
export default PasswordValidate