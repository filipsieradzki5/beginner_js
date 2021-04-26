const button = document.querySelector('button');
const terms = document.querySelector('.terms-and-conditions');

function finsihedScrolling(e) {
    if(e.target.scrollTop === (terms.scrollHeight-terms.clientHeight)) {
        console.log('scroll is done');
        button.disabled = false;
    } else {
        button.setAttribute('disabled', '');
    };
};

terms.addEventListener('scroll', finsihedScrolling);

function termsAccept() {
    console.log('i agree');
    window.alert('thanks for submitting');
};

button.addEventListener('click', termsAccept);


