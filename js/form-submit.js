function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let message = document.getElementById("message").value;
    let form = {
        name: name,
        email: email,
        telephone: tel,
        message: message,
    }
    alert(JSON.stringify(form));
}