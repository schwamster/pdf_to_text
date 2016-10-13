
import * as express from 'express';
import {utils} from './utils';
import fs = require('fs');
import multer = require('multer');

var PDFImage = require('pdf-image').PDFImage; 

// // //interface merging to make req.files work
//  declare module 'pdf-image' {
//    export class PDFImage{

//    }
//   interface Request {
//     body: any // Actually should be something like `multer.Body`
//     files: any // Actually should be something like `multer.Files`
//   }
// }

var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

var upload = multer({ storage: storage });

app.get('/', function (req, res) {
  res.send("post multipart/form to this enpoint with pdf (form-parameter: file) to get the text of the pdf");

});


app.post("/", upload.single("file"), function (req, res) {
  let path = req.file.path;
  let reader = new utils.PdfReader();
  //reader.getInfo();
  reader.getText(path).then((result) =>{
     if(!result || result.length <= 1)
     {
       //res.send("document appears to be empty");
       var pdfImage = new PDFImage("./" + path);
       pdfImage.convertPage(0).then(function (imagePath) {
          console.log("image created!");

          //now make a call to the ocr_service with the image and get the
          //text that way

          res.send("worked well!");
          //res.sendFile(imagePath);
          // 0-th page (first page) of the slide.pdf is available as slide-0.png
          //fs.existsSync("uploads/slide-0.png") // => true
        }, function (err) 
        {
          res.send(err, 500);
        });
     }
     else{
       res.send(result);
     }
  }).finally(() => 
  {
    console.log(`deleting file ${path}`);
    //fs.unlink(path);
    
  });
  //res.send("thanks");
});

var PORT =process.env.PORT | 3000;
app.listen(PORT , function() {
    console.log("HTTP server listening on port %s", PORT);
});
