// http://localhost:3000/api/getblogs?slug=javascript
import * as fs from 'fs';
export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(200).json({error:"no such blog data"})

        }
        res.status(200).json( JSON.parse(data))
    })
  }