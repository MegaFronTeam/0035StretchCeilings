"use strict";

function eventHandler() {
  $('.dd-head-js').on('click', function () {
    let clickedHead = this;
    $(this).parent().toggleClass('active');
    $(this)
      .next()
      .slideToggle(function () {
        $(this).toggleClass('active');
      });
  });
};


function shuffleArray() {
  let cardsArr = [];
  let cardsAscSorted = [];
  let cardsRow = document.querySelector('.cards__row');
  for (const item of document.querySelectorAll('.card__col')) {
    cardsArr.push(item);
  }

  cardsArr.forEach(item => {
    cardsAscSorted.push({
      cardItemHtml: item,
      cardItemPrice: Number(item.querySelector('.catblock_price span').innerHTML),
    })
  })

  let currentIndex = cardsArr.length;
  let temporaryValue, randomIndex;

  let sortByPriceSelcet = document.querySelector('.sort-by-price');

  // Random sorting
  if (sortByPriceSelcet.value === '---') {
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = cardsArr[currentIndex];
      cardsArr[currentIndex] = cardsArr[randomIndex];
      cardsArr[randomIndex] = temporaryValue;
    }
    for (const item of cardsRow.children) {
      item.remove();
    }
    for (const item of cardsArr) {
      cardsRow.insertAdjacentElement('beforeend', item);
    }
  }

  // Ascending sorting
  if (sortByPriceSelcet.value === 'asc') {
    cardsAscSorted.sort(
      function(a, b){
        return parseFloat(a.cardItemPrice) - parseFloat(b.cardItemPrice);
      }
    )
    for (const item of cardsRow.children) {
      item.remove();
    }
    for (const item in cardsAscSorted) {
      cardsRow.insertAdjacentElement('beforeend', cardsAscSorted[item].cardItemHtml);
    }
  }
  
  // Descending sorting
  if (sortByPriceSelcet.value === 'ascend') {
    cardsAscSorted.sort(
      function(a, b){
        return parseFloat(b.cardItemPrice) - parseFloat(a.cardItemPrice);
      }
    )
    for (const item of cardsRow.children) {
      item.remove();
    }
    for (const item in cardsAscSorted) {
      cardsRow.insertAdjacentElement('beforeend', cardsAscSorted[item].cardItemHtml);
    }
  }
}

let sortBtn = document.querySelector('.choose-ceiling__btn');
if(sortBtn) {
  sortBtn.addEventListener('click', () => {
    shuffleArray();
  })
}

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}