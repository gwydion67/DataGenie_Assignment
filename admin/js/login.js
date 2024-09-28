
document.getElementById('login-button').onclick = () => {
  document.getElementById("formAuthentication").onsubmit = function() { 
    // validate login creds through api
    let email = (document.getElementById('email').value);
    let pass = (document.getElementById('password').value);
    if(email == 'admin' && pass == 'admin'){
      window.history.pushState({},"","");
      window.location.assign('./users/');
    }else{
      //show error (for this either we have to write a custom error prompt or somehow use the thing vuexy is using)
      //for now ill just give and alert
      alert('seems that the password might be wrong')
    }
};
}
