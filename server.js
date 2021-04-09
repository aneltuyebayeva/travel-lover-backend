const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)

app.use(express.json())

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})