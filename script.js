let email = document.querySelector('.email');
const button = document.querySelector('.btn');
let msgErr = document.querySelector('.error');
 
function validation(email) 
    {
        let re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    button.addEventListener("click", function(e) {
        e.preventDefault();
    
        if ('' == email.value) {
            msgErr.style.display = "block";
        } else if (!validation(email.value)) {
            msgErr.style.display = "block";
        } else if (validation(email.value)) {
             msgErr.style.display = "none";
             email.value = " ";
        }
    })