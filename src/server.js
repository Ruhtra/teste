const express = require("express");

// Variables
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000

// Config server
const app = express();

app.use(express.static('src/public'));

app.get('/', (req, res) => {
	res.json({
		"msg": "mensagem"
	})
})
app.listen(PORT, () => {
	console.log(`> Running in port ${PORT}`)
})