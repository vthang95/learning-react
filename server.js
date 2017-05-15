const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log('app is running on port %d', app.get('port'));
});
