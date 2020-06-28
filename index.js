fetch("https://dad-jokes.p.rapidapi.com/random/jokes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
		"x-rapidapi-key": "e125f42f87mshd7d3251a17db38dp1988fdjsn64b36c1036d1"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});