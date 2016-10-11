var pdfUtil = require('pdf-to-text');
import * as Promise from "bluebird";
var pdf_path = "./sample.pdf";
import fs = require('fs');
const pdfUtilAsync: any = Promise.promisifyAll(pdfUtil); 


export module utils{

    export class PdfReader{
    
        getInfo(){
            pdfUtil.info(pdf_path, function(err, info) {
                if (err) throw(err);
                console.log(info);
            });
        }

        getText() : Promise<string>
        { 
            return pdfUtilAsync.pdfToTextAsync(pdf_path).then((result) => 
            { 
                console.log(result);
                return result;

            });
        }
    }
}