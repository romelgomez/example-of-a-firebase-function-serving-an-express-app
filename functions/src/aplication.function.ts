// import { runWith, HttpsFunction, Request, Response } from 'firebase-functions';
// import * as express from "express";

// const app = express();

// app.get('/timestamp', (req: Request, res: Response) => {
//     res.send(`${Date.now()}`)
// });


// app.get('/timestamp-cached', (req: Request, res: Response) => {
//     res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
//     res.send(`${Date.now()}`)
// });

// export const aplication: HttpsFunction = runWith({ memory: '2GB', timeoutSeconds: 10 }).https.onRequest(app);


import { runWith, HttpsFunction, Request, Response } from 'firebase-functions';
import { getIndex } from './services'
import * as express from "express";

const app = express();

app.get('/', function (req: Request, res: Response) {

  const context = {
      name: 'Romel Gomez'
  } 

  getIndex('index.html', context)

    .then((index) => {

        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');

        res.send(index);

    })

    .catch((error) => {

        console.error(error);

        res.redirect('/500');

    });

});

app.get('/500', function (req: Request, res: Response) {

    res.send('Error');

});


/**
 * @function 
 * @example
 * 
 */
export const aplication: HttpsFunction = runWith({ memory: '2GB', timeoutSeconds: 10 }).https.onRequest(app);
