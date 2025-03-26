const form = document.querySelector(".feedback-form");
let formData = {
    email: "",
    message: "",
};
const STORAGE_KEY = "feedback-form-state";
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields!");
        return;
    }
    console.log("Submitted data:", formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});