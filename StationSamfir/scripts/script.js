let docTitle = document.title;
window.addEventListener("blur", () =>{
document.title = "Good Luck";
})
window.addEventListener("focus", () =>{
document.title = docTitle;
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribe-button').addEventListener('click', function() {
        let email = document.getElementById('email-input').value;
        addEmailToDatabase(email);
    });
});

function addEmailToDatabase(email) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'server-url', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Email успішно додано до бази даних');
            } else {
                console.error('Помилка додавання email до бази даних');
            }
        }
    };
    xhr.send(JSON.stringify({ email: email }));
}