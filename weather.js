const fetch = require('node-fetch')
key = "1e0bbede16f90471380e2b756e52d94a"
lat = '38.951883'
lon = '-92.3337366'

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`)
	.then(res => res.json())
	.then(json => {
		console.log(json)
		console.log(json["main"].temp)
	})



