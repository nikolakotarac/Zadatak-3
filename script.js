let email = document.querySelector('.email');
const button = document.querySelector('.btn');
let msgErr = document.querySelector('.error');
 
function validation(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    button.addEventListener("click", function(e) {
        e.preventDefault();
    
        if ('' == email.value) {
            msgErr.style.display = "block";
        } else if (!validation(email.value)) {
            msgErr.style.display = "block";
        } else if (validation(email.value)) {
             msgErr.style.display = "block";
        }
    })