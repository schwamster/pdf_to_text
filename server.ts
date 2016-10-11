
import * as express from 'express';
import {utils} from './utils';

var app = express();
 
app.get('/', function (req, res) {

  //let reader = new utils.PdfReader();
  // reader.getInfo();
  // reader.getText().then((result) =>{
  //    res.send(result);
  // });
  res.send("post multipart/form to this enpoint with pdf (form-parameter: file) to get the text of the pdf");
  
})
 
app.listen(3000);