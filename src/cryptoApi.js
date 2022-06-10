
const urlApi = 'https://api.coincap.io/v2/assets'

const cryptoListGenerated = document.querySelector('#crypto-list');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// console.log(firstLetterCapitalize('laranja'));

const fetchCoins = () => {
    const requireType = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    try {
        fetch(urlApi, requireType)
            .then(response => response.json())
            .then(dados => {
                dados.data.forEach((item, index) => {
                    if (index < 10) {
                        const createLi = document.createElement('li');
                        const listItem = `${item.name} (${item.symbol}): U$ ${(parseFloat(item.priceUsd).toFixed(2))}`
                        cryptoListGenerated.appendChild(createLi).innerText = listItem;
                    }
                });
            });
    }
    catch(error) {
        console.log(error);
    }
}


window.onload = () => fetchCoins();

//0: {id: 'bitcoin', rank: '1', symbol: 'BTC', name: 'Bitcoin', supply: '19055712.0000000000000000', …}

// Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.