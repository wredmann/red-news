const express = require('express');
const got = require('got');
const moment = require('moment');
const math = require('math');
const newsr = express.Router();
const dotenv = require('dotenv').config();

newsr.get('/', async (req, res) => {
    try {
        let newsKey = process.env.API_KEY
        const response = await got(`${process.env.BASE_URL}/top-headlines?country=ng&apiKey=${newsKey}`);
        let data = JSON.parse(response.body)
        console.log(data);
        res.render('index', {articles: data.articles})
        
    } catch (error) {
		if (error.respone) {
            console.log(error)
        }
	}
})

newsr.post('/search', async (req, res) => {
    let newsKey = process.env.API_KEY
    const search = req.body.search
    console.log(req.body.search)
    try {
        const response = await got(`${process.env.BASE_URL}/everything?q=${search}&apiKey=${newsKey}`)
        let data = JSON.parse(response.body)
        console.log(data.articles);
        res.render('index', { articles: data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    } 
})

module.exports = newsr