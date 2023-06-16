const express = require('express')

const app = express()

app.get('/user', (req, res) => {
    return res.status(200).json({
        status: true,
        message:'success'
    })
})

app.listen(5050, () => console.log('listening on port 5050'))