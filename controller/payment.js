// const sdk = require('api')
// //('@phonepe-docs/v1#3dxznuf1gljiezluv');
// exports.checkTransactionStatus = async (req, res) => {
//   try {
//     const { merchantId, merchantTransactionId } = req.body;
    
//     const response = await sdk.checkStatusApi({
//       merchantId,
//       merchantTransactionId,
//     });
    
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// };


const express = require('express');
const https = require('https');
const fetch = require('node-fetch');
const app = express();

// Define an API endpoint
// exports.phonepay =async(req, res) => {
//   const options = {
//     method: 'POST',
//     hostname: 'mercury-uat.phonepe.com',
//     port: null,
//     path: '/v3/debit',
//     headers: {
//       accept: 'text/plain',
//       'Content-Type': 'application/json',
//       'X-CALLBACK-URL': 'https://www.demoMerchant.com/callback'
//     }
//   };

//   const phonePeReq = https.request(options, function (phonePeRes) {
//     const chunks = [];

//     phonePeRes.on('data', function (chunk) {
//       chunks.push(chunk);
//     });

//     phonePeRes.on('end', function () {
//       const body = Buffer.concat(chunks);
//       const responseBody = body.toString();
//       res.status(200).json({ response: responseBody });
//     });
//   });

//   phonePeReq.end();
// }
 


 

// Define an API endpoint
// exports.phonepay =async(req, res) => {
//   const requestData = JSON.stringify({
//     merchantId: 'M2306160483220675579140',
//     transactionId: 'TX123456789',
//     merchantUserId: 'U123456789',
//     amount: 10,
//     merchantOrderId: 'OD1234',
//     mobileNumber: '9xxxxxxxxx',
//     message: 'payment for order placed OD1234',
//     subMerchant: 'DemoMerchant',
//     email: 'amit***75@gmail.com',
//     shortName: 'Amit'
//   });

//   const options = {
//     method: 'POST',
//     hostname: 'mercury-uat.phonepe.com',
//     path: '/v4/debit/',
//     headers: {
//       accept: 'application/json',
//       'Content-Type': 'application/json',
//       'X-CALLBACK-URL': 'https://www.demoMerchant.com/callback',
//       'Content-Length': requestData.length
//     }
//   };
// console.log("options",options)
//   const reqToPhonePe = https.request(options, function (resFromPhonePe) {
//     const chunks = [];

//     resFromPhonePe.on('data', function (chunk) {
//       chunks.push(chunk);
//     });

//     resFromPhonePe.on('end', function () {
//       const responseBody = Buffer.concat(chunks).toString();
//       res.status(200).json({ response: responseBody });
//       console.log(responseBody)
//     });
//   });

//   reqToPhonePe.write(requestData);
//   reqToPhonePe.end();
// }

 // Define an API endpoint
//  exports.phonepay =async(req, res) => {
//     const requestData = JSON.stringify({
//       merchantId: 'M2306160483220675579140',
//       transactionId: 'TX123456789',
//       merchantUserId: 'U123456789',
//       amount: 1,
//       merchantOrderId: 'OD1234',
//       mobileNumber: '9xxxxxxxxx',
//       message: 'payment for order placed OD1234',
//       subMerchant: 'DemoMerchant',
//       email: 'amit***75@gmail.com',
//       shortName: 'Amit'
//     });
  
//     const options = {
//       method: 'POST',
//       hostname: 'mercury-uat.phonepe.com',
//       port: null,
//       path: '/v4/debit/',
//       headers: {
//         accept: 'application/json',
//         'Content-Type': 'application/json',
//         'X-CALLBACK-URL': 'https://www.demoMerchant.com/callback',
//         'Content-Length': requestData.length
//       }
//     };
  
//     const reqToPhonePe = https.request(options, function (resFromPhonePe) {
//       const chunks = [];
  
//       resFromPhonePe.on('data', function (chunk) {
//         chunks.push(chunk);
//       });
  
//       resFromPhonePe.on('end', function () {
//         const responseBody = Buffer.concat(chunks).toString();
//         res.status(200).json({ response: responseBody });
//         console.log("requestData",responseBody)
//       });
//     });
  
//     reqToPhonePe.write(requestData); // This sends the data in the request body
//     reqToPhonePe.end();
//     console.log("requestData",requestData)
//   }
 
// Define an API endpoint
exports.phonepay =async(req, res) => {
    const requestData = {
        merchantId: 'Merchantid',
        transactionId: 'TX123456789',
        merchantUserId: 'U123456789',
        amount: 1,
        merchantOrderId: 'OD1234',
        mobileNumber: '7489651191',
        message: 'payment for order placed OD1234',
        subMerchant: 'DemoMerchant',
        email: 'guptapratima98710@gmail.com',
        shortName: 'Amit'
      };
    
      const url = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
      const options = {
        method: 'POST',
        headers: { accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      };
    
      fetch(url, options)
        .then(response => response.json())
        .then(json => {
          res.status(200).json(json); // Send the JSON response to the client
        })
        .catch(err => {
          res.status(500).json({ error: 'An error occurred' });
        });
    }

 