const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}!`);
})