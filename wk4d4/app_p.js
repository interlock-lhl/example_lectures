// accept some options
// - method, defaults to GET
// - url
// returns a promise
function ajax(options) {

  return new Promise( (resolved, rejected) => {
    var method = options.method || 'GET';
    var url = null;
    if (options.url) {
      url = options.url;
    } else {
      rejected('Missing URL param');
      return;
    }

    function reqListener () {
      if (options.json === true) {
        try {
          resolved(JSON.parse(this.responseText));
        } catch (e) {
          rejected(e);
        }
      } else {
        resolved(this.responseText);
      }
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open(method, url);
    oReq.send();
  });
}

function promiseErrorReporter(err) {
  console.log("Offical error right", err);
}

ajax({
  // method: 'GET',
  url: '/memo.json',
  json: true
}).then(function(result) {
  console.log(result);
  return ajax({
    url: result.other_memo_uri,
    json: true
  });
}).then(function(result) {
  console.log(result);
  return "awesome sauce";
}).then(function(result) {
  console.log(result);
}).catch(promiseErrorReporter);


// ajax({
//   // method: 'GET',
//   url: '/memo.json',
//   json: true
// }, (err, result) => {
//   if (err) return console.log(err);
//   // var real_result = JSON.parse(result);
//   console.log(result);
//   ajax({
//     url: result.other_memo_uri,
//     json: true
//   }, function(err, other_result) {
//     if (err) return console.log(err);
//
//     console.log("other result:", other_result);
//   });
//   // console.log(result);
// });
