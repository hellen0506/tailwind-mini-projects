console.log('Application running.');

const formShortLink = document.querySelector('#form-shortlink');
const inputURL = document.querySelector('#input-url');
const errorMess = document.querySelector('#error-valid');
if (formShortLink) {
    formShortLink.addEventListener('submit', handleShortLink);
}
function handleShortLink(e) {
    e.preventDefault();
    console.log(inputURL.value, 'dd');
    if (inputURL.value == '') {
        errorMess.innerText = 'Please enter shorten link';
        errorMess.classList.add('block');
        errorMess.classList.remove('hidden');
    }
    console.log(value);
}
function isValidHttpUrl(string) {
    console.log(string);
    let url;
    try {
        url = new URL(string);
        errorMess.classList.add('hidden');
    } catch (_) {
        errorMess.innerText = 'Please enter a valid URL';
        errorMess.classList.add('block');
        errorMess.classList.remove('hidden');
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
}
