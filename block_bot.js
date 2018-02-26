//modules
var Twit = require('twit')

//DEFINES
var NUM_HISTORY=5;
var USERNAME=; //enter your twitter @username

var followers_list= [];
var T = new Twit({
"consumer_secret": "..",
  "consumer_key": "..",
  "access_token": "..",
  "access_token_secret": "..",
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
T.get('followers/ids', { screen_name: USERNAME , count: NUM_HISTORY},  function (err, data, response) {
  console.log(data)

var i = 0; 
var intervalObject = setInterval(function () { 
        i++; 
console.log("this is i->"+i)

followers_list[i]=JSON.stringify(data.ids[i]);
T.get('users/show',{user_id: followers_list[i]}, function(err,data,response){
console.log(JSON.stringify("default image statue-> "+data.default_profile_image))
console.log(JSON.stringify("status count-> "+data.statuses_count))
console.log(JSON.stringify("status count-> "+data.screen_name))
console.log(JSON.stringify("status count-> "+data.id_str))


var default_img=JSON.stringify(data.default_profile_image)
var status_count=JSON.stringify(data.statuses_count)
var screen_name=JSON.stringify(data.screen_name)
var id_str=JSON.stringify(data.id_str)

if (default_img=="true" && status_count < 3)
{
console.log("***posible bot detected at***->")
console.log("status count-> "+status_count)
console.log("status count-> "+screen_name)
console.log("status count-> "+id_str)
console.log("**END DETECT->")

//uncomment if you want to start blocking users
/*
var id_fix= id_str.replace(/['"]+/g, '');

T.post('blocks/create', { user_id:id_fix  }, function(err, data, response) {
//console.log(data)
  console.log("The user " +id_str+"has been blocked")
})


*/

}

})
if (i == NUM_HISTORY) { 
            console.log('exiting'); 
            clearInterval(intervalObject); 
        } 
    }, 1000); 





console.log("this is list-> "+followers_list);

})

