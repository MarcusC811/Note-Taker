const notes = require('express').Router();
const path = require('path');
// const { readAndAppend, readFromFile } = require('./fsUtils');

notes.post('/notes', (req, res) => {
  res.send('../db/db.json')

  // const newNote = {

  // }

  // readAndAppend(newTip, './db/tips.json');
})



module.exports = notes;