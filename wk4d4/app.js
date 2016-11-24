// accept some options
// - method, defaults to GET
// - url
// - callback on response
function ajax(options, cb) {
  var method = options.method || 'GET';
  var url = null;
  if (options.url) {
    url = options.url;
  } else {
    cb('Missing url');
    return;
    // TODO error?
  }

  function reqListener () {
    if (options.json === true) {
      try {
        cb(null, JSON.parse(this.responseText));
      } catch (e) {
        cb(e);
      }
    } else {
      cb(null, this.responseText);
    }
    // cb(null, oReq.responseText);
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open(method, url);
  oReq.send();
}

// ajax({
//   // method: 'GET',
//   url: '/memo.json'
// }, (err, result) => {
//   if (err) return console.log(err);
//   console.log(result);
// });

ajax({
  // method: 'GET',
  url: '/memo.json',
  json: true
}, (err, result) => {
  if (err) return console.log(err);
  // var real_result = JSON.parse(result);
  console.log(result);
  ajax({
    url: result.other_memo_uri,
    json: true
  }, function(err, other_result) {
    if (err) return console.log(err);
    
    console.log("other result:", other_result);
  });
  // console.log(result);
});
