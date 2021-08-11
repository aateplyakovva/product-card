const popup = document.getElementById('popup');
const btnWrapper = document.getElementById('btnWrapper');
const popupHeader = document.getElementsByClassName('popupHeader');
const popupBody = document.getElementsByClassName('popupBody');
const favorites = document.getElementById('heart')
const formWrapper = document.getElementById('form');
const buttonOpenForm = document.getElementById('button-open-form');
const cardWrapper = document.querySelector('.otherCardWrapper');
const createNewCard = document.getElementById('submit');
const close = document.getElementById('close');

close.addEventListener('click', () => {
    toogleForm();
})

const toogleForm = () => {
    formWrapper.classList.contains('active') ?
        formWrapper.classList.remove('active') :
        formWrapper.classList.add('active');
}

const popupTextEnum = {
    add: {
        header: "Product has been added to your cart!"
    },
    addFavorites: {
        header: "Product has been added to favorites!"
    },
};

const togglePopup = () => {
    popup.classList.contains('active') ?
        popup.classList.remove('active') :
        popup.classList.add('active');
}

btnWrapper.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (action) {
        togglePopup();
        popupHeader[0].innerHTML = popupTextEnum[action].header;
    }
})

favorites.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (action) {
        togglePopup();
        popupHeader[0].innerHTML = popupTextEnum[action].header;
    }
})

buttonOpenForm.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (action) {
        toogleForm();
    }
})

const newCard = function () {
    const newProductCard = document.createElement('div');
    newProductCard.classList.add('new-card');

    const newProductImg = document.createElement('div');
    newProductImg.classList.add('new-img');
    const imageOfProduct = document.createElement('img');
    imageOfProduct.setAttribute('src', document.getElementById('img').value);
    newProductImg.append(imageOfProduct);

    const newCardWrapper = document.createElement('div');
    newCardWrapper.classList.add('new-wrapper');

    const newProductTitle = document.createElement('div');
    newProductTitle.classList.add('new-title');
    newProductTitle.append(document.getElementById('title').value);

    const newProductDescription = document.createElement('div');
    newProductDescription.classList.add('new-description');
    newProductDescription.append(document.getElementById('description').value);

    const newProductPrice = document.createElement('div');
    newProductPrice.classList.add('new-price');
    newProductPrice.append(document.getElementById('price').value);

    newProductCard.append(newProductImg);
    newProductCard.append(newCardWrapper);
    newCardWrapper.append(newProductTitle);
    newCardWrapper.append(newProductDescription);
    newCardWrapper.append(newProductPrice);

    cardWrapper.prepend(newProductCard);
}

createNewCard.addEventListener('click', (event) => {
    event.preventDefault();
    newCard();
})

