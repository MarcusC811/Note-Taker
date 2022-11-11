const notes = require('express').Router();
const path = require('path');
const { readAndAppend, readFromFile } = require('./fsUtils');

notes.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/notes.html'))
  });



module.exports = notes;