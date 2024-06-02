document.getElementById('loginForm').addEventListener('submit', function (event) {
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match. Please try again.');
        event.preventDefault();
        passwordInput.focus();
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    }
});

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}