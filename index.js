const product = {

    Blouse: [
        {
            name: 'Blouse ',
            price: '19 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '20 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '30 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '40 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {

            name: 'Blouse ',
            price: '10 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],
    Cap: [
        {
            name: 'Cap',
            price: '80 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '1499 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '50 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '60 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Cap',
            price: '5 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],
    shoes: [
        {
            name: 'shoes',
            price: '80 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '90 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '80 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '90 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'shoes',
            price: '10 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],
    Belt: [
        {
            name: 'Belt',
            price: '37 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '45 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '40 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '79 UAH',
            descr: 'Lorem ipsum dolor sit '
        },
        {
            name: 'Belt',
            price: '15 UAH',
            descr: 'Lorem ipsum dolor sit '
        }
    ],

}

const catalog = document.querySelector('.catalog');
const mainList = document.querySelector('.main__list');
const wrapperBlock = document.querySelector('.product__wrapp');
const appear = document.querySelector('.appear');
const appearContent = document.querySelector('.appear__content');
const appearCloseIcon = document.querySelector('.appear__close');



mainList.addEventListener('click', (e) => {
    const targetAction = e.target.dataset.action;
    goods(targetAction)
});

function goods(produktKey) {
    if (!wrapperBlock) return;
    wrapperBlock.innerHTML = '';
    Object.values(product[produktKey]).forEach((el) => {
        const mainBlock = document.createElement('div');
        mainBlock.classList.add('product__block');
        wrapperBlock.appendChild(mainBlock);
        const title = document.createElement('h1');
        title.innerText = el.name;
        title.classList.add('product__title');
        mainBlock.appendChild(title);
        const infoBlock = document.createElement('div');
        infoBlock.classList.add('product__info');
        mainBlock.appendChild(infoBlock);
        const price = document.createElement('span');
        price.innerText = el.price;
        price.classList.add('product__price');
        infoBlock.appendChild(price);
        const descr = document.createElement('p');
        descr.innerText = el.descr;
        descr.classList.add('product__descr');
        infoBlock.appendChild(descr);
        const btn = document.createElement('button');
        infoBlock.classList.add('product__info');
        btn.innerText = 'add to cart';
        btn.classList.add('form__btn');
        infoBlock.appendChild(btn);
        mainBlock.addEventListener('click', () => {
            productInfoActive(infoBlock);
            btn.addEventListener('click', () => {
                activePopup();
            });
        });
    });
};


function productInfoActive(el) {
    const blockClass = document.querySelectorAll('.product__info');
    blockClass.forEach(el => el.classList.remove('product__info-active'));
    el.classList.add('product__info-active');
}

function activePopup() {
    appear.classList.add('appear-active');
    appearContent.classList.add('appear__content-active');
}

function closePopup() {
    appear.classList.remove('appear-active');
    appearContent.classList.remove('appear__content-active ');
    wrapperBlock.innerHTML = '';

}

appearCloseIcon.addEventListener('click', () => {
    closePopup();
});

const form = document.querySelector('#get_form');
const firstName = form.firstname;
const lastName = form.lastname;
const phone = form.phone;
const email = form.email;
const city = form.city;
const poshta = form.poshta;
const payment = form.payment;
const quantity = form.quantity;
const textarea = form.textarea;
const submit = document.querySelector('.form__btn');



const formInputs = [
    {
        name: 'firstName',
        inputEl: firstName,
        validationsRules: [validateStringLength, validateForValue],
        errorElValue: firstName.parentElement.querySelector('.form__error'),
        errorElForm: firstName.parentElement.querySelector('.form__error-length')
    },
    {
        name: 'lastName',
        inputEl: lastName,
        validationsRules: [validateStringLength, validateForValue],
        errorElValue: lastName.parentElement.querySelector('.form__error'),
        errorElForm: lastName.parentElement.querySelector('.form__error-length')
    },
    {
        name: 'phone',
        inputEl: phone,
        validationsRules: [isNumber],
        errorElValue: phone.parentElement.querySelector('.form__error'),
        errorElForm: phone.parentElement.querySelector('.form__error-number')
    },
    {
        name: 'email',
        inputEl: email,
        validationsRules: [isEmail],
        errorElValue: email.parentElement.querySelector('.form__error'),
        errorElForm: email.parentElement.querySelector('.form__error-email')
    },
    {
        name: 'city',
        inputEl: city,
        validationsRules: []
    },
    {
        name: 'poshta',
        inputEl: poshta,
        validationsRules: []
    },
    {
        name: 'payment',
        inputEl: payment,
        validationsRules: []
    },
    {
        name: 'quantity',
        inputEl: quantity,
        validationsRules: []
    },
    {
        name: 'textarea',
        inputEl: textarea,
        validationsRules: []
    }
]

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const validatedArr = formInputs.map((el) => {
        const allIsValid = el.validationsRules.map((func) => {
            return func(el.inputEl.value, el.errorElValue, el.errorElForm);
        });
        return allIsValid.every(el => el === true);
    });
    if (validatedArr.every(el => el === true)) {
        const data = {};
        formInputs.forEach((input) => {
            data[input.name] = input.inputEl.value;
        });
        sendOnServer(data);
        closePopup();
    } else {
        console.log('sth wrong');
    }
})

function sendOnServer(data) {
    console.log(data);
}

function validateStringLength(value, errorElValue, errorElForm) {
    const isLength = value.length >= 3;
    if (isLength === true) {
        errorElForm.classList.add('hide');
        errorElValue.classList.add('hide');
    } else {
        errorElForm.classList.remove('hide');
        errorElValue.classList.remove('hide');
        errorElForm.innerHTML = 'not long enought';
    }
    return isLength;
}

function validateForValue(value, errorElValue) {
    const isValue = !!value.trim();
    if (isValue === true) {
        errorElValue.classList.add('hide');
    } else {
        errorElValue.classList.remove('hide');
        errorElValue.innerHTML = 'the fild is empty';
    }
    return isValue;
}

function isNumber(value, errorElValue, errorElForm) {
    const isNum = value ? !isNaN(value) : false;
    if (isNum === true) {
        errorElForm.classList.add('hide');
        errorElValue.classList.add('hide');
    } else {
        errorElForm.classList.remove('hide');
        errorElValue.classList.remove('hide');
        errorElForm.innerHTML = 'it is not a number';
    }
    return isNum;
}

function isEmail(value, errorElValue, errorElForm) {
    const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    if (isEmail === true) {
        errorElForm.classList.add('hide');
        errorElValue.classList.add('hide');
    } else {
        errorElValue.classList.remove('hide');
        errorElForm.classList.remove('hide');
        errorElForm.innerHTML = 'it is not an email';
    }
    return isEmail;
}


