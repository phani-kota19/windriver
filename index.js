const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const jsonParser = bodyParser.json();

app.get('/api/health', (req, res) => {
  res.status(200);
  res.json({'ServerStatus': "OK"});
});

app.post('/api/encrypt', jsonParser, (req, res) => {
  let inputString = req.body.input;
  if(!validateInputString(inputString)) {
    let encryptedString = encryptString(inputString);
    res.status(200);
    res.json(responseJson(inputString, encryptedString, 'Success', 'Encryption Completed'));
  } else {
    res.status(400);
    res.json(responseJson(inputString, '', 'Error', 'Please pass the input string to encrypt. Input cannot be empty.'));
  }
});

app.post('/api/decrypt', jsonParser, (req, res) => {
  let inputString = req.body.input;
  if(!validateInputString(inputString)) {
    let decryptedString = decryptString(inputString);
    res.status(200);
    res.json(responseJson(inputString, decryptedString, 'Success', 'Decryption Completed'));
  } else {
    res.status(400);
    res.json(responseJson(inputString, '', 'Error', 'Please pass the input string to decrypt. Input cannot be empty.'));
  }
});


const encryptString = (inputString) => {
  return 'some' + inputString + 'encryption';
}

const decryptString = (inputString) => {
  return inputString.replace('some', '').replace('encryption', '');
}

const responseJson = (input, output, status, message) => {
  return {
    'Input': input,
    'Output': output,
    'status': status,
    'message': message
  };
}

const validateInputString = (inputString) => {
  return (!inputString || 0 === inputString.length);
}

app.listen(port, () => {
  console.log(`server listening on port: ${port}!`)
});