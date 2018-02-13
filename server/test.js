const express = require('express');
const rendertron = require('rendertron-middleware');

const app = express();

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://my-rendertron-instance/render',
}));

app.use(express.static('files'));
app.listen(8081);
