var pdfUtil = require('pdf-to-text');
import * as Promise from "bluebird";

const pdfUtilAsync: any = Promise.promisifyAll(pdfUtil); 


export module utils{

    export class PdfReader{
    
        getInfo(path: string){
            pdfUtil.info(path, function(err, info) {
                if (err) throw(err);
                console.log(info);
            });
        }

        getText(path: string) : Promise<string>
        { 
            console.log(`start reading '${path}'`);
            return pdfUtilAsync.pdfToTextAsync(path).then((result) => 
            { 
                console.log(`done reading '${path}' -> ${result.length} chars`);
                return result;

            });
        }
    }
}