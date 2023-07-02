require('dotenv').config();
import cors from 'cors';
import express from 'express';
import serverless from 'serverless-http';
import request from 'request'
import { Weather } from './interfaces/IWeather';

const PORT = process.env.PORT || 6000
const API_KEY = `${process.env.API_KEY}`;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Up, welcome!')
})

app.get('/api/weather', (req, res) => {	
	const { city } = req.query
	const url = `${process.env.WEATHER_API_URL}/current.json?q=${city}&key=${API_KEY}`

	request(url, (err, _, body) => {
		console.log('erro do carai', err, url)
		if (err) {
			res.json({ weather: null, error: 'Error, please try again' })
		} else {
			const {
				location: { name, region, country },
				current: { temp_c, temp_f, condition: { text, icon },
					wind_mph, wind_dir, pressure_mb, pressure_in, humidity, cloud }
			} = JSON.parse(body)

			res.json({
				name, region, country,
				temp_c, temp_f, text, icon, wind_dir,
				wind_mph, pressure_mb, pressure_in, humidity, cloud
			})
		}
	})
})

app.use(cors({
	origin: '*'
}))

app.use((req, res) => {
	res.status(404)
})

app.listen(PORT, () => {
	console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})

module.exports.handler = serverless(app);