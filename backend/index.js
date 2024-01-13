const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./router'));

// Network testing
app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
    res.end();
});

// Error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = '500', status = 'Server Error', message = 'Unknown Server Error' } = err;
    return res.status(statusCode).json({ status, message });
});

app.listen(PORT, () => {
    console.log(`AI logo generation server running on port ${PORT}`);
});