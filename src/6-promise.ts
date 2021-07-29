import fetch from 'node-fetch'

fetch('http://api.exchangeratesapi.io/latest?symbols=USD,EUR&access_key=052331c256192f1d8619c0499387dffd')
    .then((response) => {
        return response.text()
    })
    .then((responseText) => {
        return JSON.parse(responseText)
    })
    .then((data) => {
        console.log(data)
    })