const AWS = require('aws-sdk');
const env = require('./s3.env.js');

console.log('Env: ', env.Bucket);
console.log('Env: ', env.aws_access_key_id);
console.log('Env: ', env.aws_secret_access_key);
 
const s3 = new AWS.S3({
    accessKeyId : env.AWS_ACCESS_KEY,
    secretAccessKey : env.AWS_SECRET_ACCESS_KEY,
});
 
 
module.exports = s3;