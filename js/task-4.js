const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
    return alert('All form fields must be filled in');
  } else {
      const formData = {
        email,
        password,
      };
      
      console.log(formData);
      form.reset();
    }
}

registerForm.querySelectorAll('label').forEach(label => {
  label.classList.add('label-class');
});

registerForm.querySelectorAll('input').forEach(input => {
  input.classList.add('input-class');
});

const btn = registerForm.querySelector(`button`);
btn.classList.add(`btn-class`);
