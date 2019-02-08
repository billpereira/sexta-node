// process.env.UV_THREADPOOL_SIZE = 1;
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
	https
		.request('https://www.google.com', res => {
			res.on('data', () => {});
			res.on('end', () => {
				console.log('https:', Date.now() - start);
			});
		})
		.end();
}

function doHash() {
	crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
		console.log('Hash:', Date.now() - start);
	});
}

doRequest();

fs.readFile('ex3.js', 'utf8', () => {
	console.log('FS:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
doHash();
