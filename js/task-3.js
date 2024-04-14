const nameInput = document.querySelector(`#name-input`);
nameInput.classList.add(`name-field`)
const nameOutput = document.querySelector(`#name-output`);
nameInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value.trim();
    if (nameInput.value === "") {
        nameOutput.textContent = `Anonymous`
    }
});

const fatherIp = document.createElement('div');
fatherIp.classList.add(`text-field`);

const hedOne = document.querySelector('h1')
hedOne.classList.add(`hedone`);

fatherIp.appendChild(nameInput);
fatherIp.appendChild(hedOne);
document.body.appendChild(fatherIp);
