var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BC_pXvqVj5AxMIUn9QN5uTXsK0otuESOme0fhX2S8xqobPRI74WUw76u3PSUjJJtU-_3hQd_EFsz6uDlB0CNSVU",
   "privateKey": "u64bUMGOAPkz4j1BMxgIPGkRRRjfb_7nIQcmecWGbqU"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dLQTk8eCLog:APA91bFi99kzt8VhOdlMTfVg7BFKVm3J1yUKjqZplf3wuvoPJhRO1VgoMpNcRtPZcDBLUSL9aOGKTT8astEAhxhH-8dVcRDr0ehDBCTA2rWp_bj4HAGQpzg-8O8idbCiWu9pYCEdbFbI",
   "keys": {
       "p256dh": "BMt2U8bzytldxMZZw8X185gShrHZTI1XWvcqFW4ACn8aVXnj6mu3ESMGFBOrE7mBk9a54HEDmq4Ln/GjfLyElh4=",
       "auth": "1ItJbi+fLR2GAq2s+80weg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '270511791065',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
).then ((success)=>{
    console.log(success)
})
.catch ((error)=>{
    console.log(error)
})