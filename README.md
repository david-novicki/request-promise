# request-promise

Request library wrapped in a promise see original documentation [here](https://www.npmjs.com/package/request)

Samples:
~~~~
request('https://www.google.com').then((data) => {
	//do something
})
~~~~


~~~~
var options = {
	url: 'https://www.dermveda.com',
	method: 'POST'
	headers: {
		'User-Agent': 'request'
	}
	json: {
		message: 'hello world'
	}
}
request(options).then((data) => {
	//do something with data
})
~~~~
