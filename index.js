const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.post("/login", (req, res) => {
	res.json({ success: 1 })
})

app.post("/sinup", (req, res) => {
	res.json({ success: 1 })
})

module.exports = app

if (require.main === module) {
	app.listen(3000, () => console.log("server is running on 3000"))
}
