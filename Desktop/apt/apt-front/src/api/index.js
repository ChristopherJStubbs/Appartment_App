import decode from 'jwt-decode';
const BASE = 'http://localhost:3001'

export default class AuthService {
	constructor(domain) {
		this.domain = 'http://localhost:3001'
	}

	login = (user) => {
		return this.authFetch(`${this.domain}/users/sign_in`, {
			method: "POST",
			body: JSON.stringify(user),
		})
		.then(statusResponse => {
			let token = statusResponse.headers.get('Authorization')
			// set a JWT token in local storage, taken out of response from API
			console.log(token);
			this.setToken(token)
			//return json from response
			return statusResponse.json()
		})
	}

	register = (user) => {
		console.log(this.domain);
		return this.authFetch(`${this.domain}/users`, {
			method: "POST",
			body: JSON.stringify(user),
		})
		.then(statusResponse => {
			let token = statusResponse.headers.get('Authorization')
			// set a JWT token in local storage, taken out of response from API
			console.log(token);
			this.setToken(token)
			//return json from response
			return statusResponse.json()
		})
	}

	loggedIn() {
		const token = this.getToken()
		return !!token && !this.isTokenExpired(token)
	}

	isTokenExpired(token) {
		try {
			const decoded = decode(token)
			if (decoded.exp < Date.now() / 1000) {
				return true
			} else {
				return false
			}
		}
		catch (err) {
			return false;
		}
	}

	// The token is stored in the browser
	setToken(token) {
		console.log(token);
		let parsedToken = token.split('.')[1]
		localStorage.setItem('id_token', parsedToken)
	}

	// Fetch the token from local storage
	getToken() {
		return localStorage.getItem('id_token')
	}

	// Removes the token
	logout() {
		localStorage.removeItem('id_token');
	}

	getUserId = () => {
		const token = decode(this.getToken(), { header: true });
		return token.sub
	}

	authFetch = (url, options) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

		if (this.loggedIn()) {
			headers['Authorization'] = 'Bearer ' + this.getToken()
		}

		return fetch(url, {
			headers,
			...options
		})
		.then(apiResponse => this._checkStatus(apiResponse))
		.catch(err => {
			console.log("::: FETCH ERROR CAUGHT:::", err)
			return err
		})
	}

	_checkStatus(response) {
		// console log message on whether or not the http response shows success
		// if in a real application, this would be handled more extensively
		if(response.status >= 200 && response.status < 300) {
			console.log(":::SUCCESS:::");
		} else {
			console.log(":::ERROR:::", response)
		}
		// we just return the whole response either way...
		return response
	}
}

let getApts = function() {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/apartments') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            console.log(json);
            return json
        })
}

let getApt = function(id) {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/apartments/' + id) // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            console.log(json);
            return json
        })
}

let createApt = function(apartment) {
    console.log(BASE + '/apartments');
    return fetch(BASE + '/apartments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(apartment),
    })
    .then(resp => {
        console.log()
        let json = resp.json()
        return json
    })
}

let createUser = function(user) {
    console.log(BASE + '/signup');
    return fetch(BASE + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })
    .then(resp => {
        console.log()
        let json = resp.json()
        return json
    })
}
// THOUGHT ABOUT USING THIS BUT DIDNT
// let showApt = function(id) {
//   return fetch(BASE + '/apartments/' + id)
//   .then(resp => {
//     let json = resp.json();
//     console.log(json);
//     return json
//   })
// }

export  {
    getApts, getApt, createApt, createUser
}
