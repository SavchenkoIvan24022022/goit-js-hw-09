const formData = { email: "", message: "" };
const feedbackForm = document.querySelector(".feedback-form");
const LOCAL_STORAGE_KEY = 'feedback-form-state';



feedbackForm.addEventListener('input', onFormInput);

function onFormInput (event) {
formData[event.target.name] = event.target.value.trim();
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
// console.log(formData);
}

feedbackForm.addEventListener('submit', (eve) => {
    eve.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        feedbackForm.reset();
    }

});

function checkStorage() {
const storageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
console.log(storageData);
if (!storageData) {
    return
}

feedbackForm.elements.email.value = storageData.email;
feedbackForm.elements.message.value = storageData.message;

formData.email = storageData.email;
formData.message = storageData.message;

console.log(feedbackForm.elements);
};
checkStorage();
