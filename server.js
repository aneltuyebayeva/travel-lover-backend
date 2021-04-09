const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)
const userRoutes = require('./routes/userRoutes')
const cityRoutes = require('./routes/cityRoutes')

app.use(express.json())
app.use(require('cors')())

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

app.use('/user', userRoutes)