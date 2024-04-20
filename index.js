const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

const companies = [{
    src: 'https://companiesmarketcap.com'
}]

const data = []

companies.forEach(company => {
    axios.get(company.src)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const tableContent = $('tbody')
        let count = 0
        const lineLimit = 10

        tableContent.find('tr').each((i, elem) => {
            if (count >= lineLimit) {
                return false;
            }
            const cell = $(elem).find('td')

            const obj = {
                "Company name": $(cell[2]).find('div.company-name').text().trim(),
                "Company code": $(cell[2]).find('div.company-code').text().trim(),
                "Company Revenue": $(cell[3]).text().trim(),
                "Stock Value": $(cell[4]).text().trim(),
                "Company Country": $(cell[7]).find('span.responsive-hidden').text().trim(),
            }
            
            data.push(obj)

            count++

        })
        
    })

})

app.get('/', (req,res) => {
    res.json(data)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}` ))