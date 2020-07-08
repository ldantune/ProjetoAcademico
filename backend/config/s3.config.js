const AWS = require('aws-sdk');
const env = require('./s3.env.js');
 
const s3 = new AWS.S3({
    accessKeyId: env.aws_access_key_id,
    secretAccessKey: env.aws_secret_access_key,
    Bucket: env.Bucket,
    region: 'sa-east-1',
});
 
 
module.exports = s3;
