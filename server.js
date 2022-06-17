'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index', { title: 'Simple Web App by Filip', pod: `Pod that this app is running on: ${process.env.KUBERNETES_POD_NAME}`, namespace: `Namespace that this app is under: ${process.env.KUBERNETES_NAMESPACE}`,
    podIP: `Pod's IP address: ${process.env.KUBERNETES_POD_IP}`, nodeName: `Node on which the app is running: ${process.env.KUBERNETES_NODE_NAME}`, appVersion: `App version: 1.22`  })
  })

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);