const s3 = require('../config/s3.config.js');
const env = require('../config/s3.env.js');
const AWS = require('aws-sdk');

exports.doUpload = (req, res) => {
  let s3bucket = new AWS.S3({
    accessKeyId: env.aws_access_key_id,
    secretAccessKey: env.aws_secret_access_key,
    Bucket: env.Bucket,
    region: 'sa-east-1',
  });

  console.log('Env Bucket: ', env.Bucket);
  console.log('Env aws_access_key_id: ', env.aws_access_key_id);
  console.log('Env aws_secret_access_key: ', env.aws_secret_access_key);

  s3bucket.createBucket(function () {
    const params = {
      region: 'sa-east-1',
      Bucket: env.Bucket,
      Key: req.file.originalname,
      Body: req.file.buffer,
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        console.log('error in callback');
        console.log(err);

        console.log('Got error:', err.message);
        
        
      }
      console.log('success');
      console.log(data);
    });
  });

  // const params = {
  //   Bucket: env.Bucket,
  //   accessKeyId: env.aws_access_key_id,
  //   Body: req.file.buffer
  // }

  // console.log('Params: ', params);

  //   s3.upload(params, (err, data) => {
  //     if (err) {
  //       res.status(500).send("Error -> " + err);
  //     }
  //     res.send("File uploaded successfully! -> keyname = " + req.file.originalname);
  //   });

  // s3.upload(params, (err, data) => {
  //   if (err) {
  //       res.status(500).json({error:"Error -> " + err});
  //   } else if(data){
  //       res.send({message: 'File uploaded successfully! -> keyname = ' + params.Key,file_name: params.Key});
  //   }
  // });

  // console.log('Env params.Bucket: ', params.Bucket);
  // console.log('Env params.Key: ', params.Key);
  // console.log('Env params.Body: ', params.Body);

  // s3.upload(params, function (err, data) {
  //   if (err) {
  //     console.log('error in callback');
  //     console.log(err);
  //   }
  //   console.log('success');
  //   console.log(data);
  // });
};

// function uploadToS3(file) {
//   let s3bucket = new AWS.S3({
//     accessKeyId: IAM_USER_KEY,
//     secretAccessKey: IAM_USER_SECRET,
//     Bucket: BUCKET_NAME
//   });
//   s3bucket.createBucket(function () {
//       var params = {
//         Bucket: BUCKET_NAME,
//         Key: file.name,
//         Body: file.data
//       };
//       s3bucket.upload(params, function (err, data) {
//         if (err) {
//           console.log('error in callback');
//           console.log(err);
//         }
//         console.log('success');
//         console.log(data);
//       });
//   });
// }

exports.listKeyNames = (req, res) => {
  const params = {
    Bucket: env.Bucket,
  };

  var keys = [];
  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log(err, err.stack); // an error occurred
      res.send('error -> ' + err);
    } else {
      var contents = data.Contents;
      contents.forEach(function (content) {
        keys.push(content.Key);
      });
      res.send(keys);
    }
  });
};

exports.doDownload = (req, res) => {
  const params = {
    Bucket: env.Bucket,
    Key: req.params.filename,
  };

  res.setHeader('Content-Disposition', 'attachment');

  s3.getObject(params)
    .createReadStream()
    .on('error', function (err) {
      res.status(500).json({ error: 'Error -> ' + err });
    })
    .pipe(res);
};
