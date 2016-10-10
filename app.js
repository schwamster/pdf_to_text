var pdfUtil = require('pdf-to-text');
var pdf_path = "./sample.pdf";

pdfUtil.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});

//option to extract text from page 0 to 10
var option = {from: 0, to: 10};

pdfUtil.pdfToText(upload.path, option, function(err, data) {
  if (err) throw(err);
  console.log(data); //print text    
});

//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(upload.path, function(err, data) {
  if (err) throw(err);
  console.log(data); //print all text    
});
