const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const express = require('express');

const app = express();

const config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/'
    }
}
const nuxt = new Nuxt(config);

function handleRequest (req, res) {
    nuxt.renderRoute('/')
        .then(result => {
            res.send(result.html);
        })
        .catch(e => {
            res.send(e);
        });
}

app.get('*', handleRequest);

exports.ssrapp = functions.https.onRequest(app);