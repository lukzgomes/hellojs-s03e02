const axios = require("axios")

const api = axios.create({
	baseURL: "https://api.github.com"
})

api.get("/repos/seita-ifce/hello-js-v3/issues/2/comments").then( ret => {
	ret.data.filter(comment => new Date(comment.created_at) < new Date("2017-09-14") && comment.body.includes("hellojs-s03e02")).forEach(elem => {
		console.log("usuario: " + elem.user.login + ", comment: " + elem.body.trim() + ", data: " + elem.created_at)
	})
})