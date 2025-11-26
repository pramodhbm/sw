var push = require("web-push");

let keys = {
  publicKey: 'BDJC1medoCtJ_T7gY3Pk78WtEJklpL9zBMjqF2f3m6ijU--oORl22bmwFXQ7HHXUccdrauAz3AEOgpDonATwYcA',
  privateKey: 'dDeB2BB-AxK4N8wxiyuCcwdIcbaDB1BACmTuqbvdhgc'
}

push.setVapidDetails(
  'mailto:test@example.com',
  keys.publicKey,
  keys.privateKey
);

let sub = {
  "endpoint": "https://web.push.apple.com/QAP3PI1AdPXWRAkXgpZ3_62LNDrTBhtRvMQ8aWNEnAZjRGU3Tfewmjix4VS2CzzeX4tMj3-qbZYPVny0gO6QkL8KbTggAISvZkLHZhmJYyo7G9yAscBBGMPkLaW11uk0kcH36mmFrRY6nAeSOg41bIbDRktzoGinJkIRQ6koaeU",
  "keys": {
    "p256dh": "BGK0EvDiFARx6u86ASXDPgG8WfX29SewopQkcP7UCNOeBcnxn5ds_G-ZX665xA6Zxpkg40wFz7T93mtvwQ2a_bI",
    "auth": "PCUZo2YqRnWw6-6jh5L0vA" 
  } 
}

let sub2 = {"endpoint":"https://web.push.apple.com/QPlPsQ2CwtSyIXmmZYzq55WmUEwdKzFnqOQi2OLoKArBB-PlYNRjC86lCs_29zL6UTZFp-6oJTzAMk2eUcR1FUGh4TReVKXO_dtM-hUT_HfwJuXEMux6z-qWnTFbtFtqLPV2QYJ3KGg5CQ5pnX2tdYjzS2rZKSTma6ZiMXxRx6c","keys":{"p256dh":"BJPuSsR4M114ZBMFXxaqUhR_ska7bO16GD9LVeaKpsxNHaVS9A4EdFxsn9M4h6zECJZmilHo_BE-DQ0O99B5uGw","auth":"tVmovJkXO15XMNkjujSoMA"}}

let sub3 = {"endpoint":"https://wns2-pn1p.notify.windows.com/w/?token=BQYAAADxfF07CLKrp7APgw9pvvy8ivuPFi5Rzk5ihYn6iFrz8wr7VT0W0gKA5gigXU18Lq6WFqiclVNyWr06oxss35hJvsmUJt9CGEeDyNCwUpsbFUgNC6zSTTl7RythmlyW8CtyE6cjDHbpo5jTo5JrFxCPbufv%2baPO4OjaavODJIg%2fquP89TDa1quHVRLLoBMem4Jw1ptrEynDXYzRzUZFIyg%2bUHuuIKWyAnUaEcEF%2f%2fQ5TvNW00fsDF%2bA3TSvQkrjOcQyDXo09bqvu%2fktLCGABcqDNXKBmvhR8JCtVrOq55Tz5LZfxsbgxPJc9XTRwleZtt%2fNYt%2fr7UqGOkR6UDkhChvtL8kWZ7iiY8kSAiF6dKNIlQ%3d%3d","expirationTime":null,"keys":{"p256dh":"BI1nEEmSRfT-boihTAd411xjeI1g-dw-JQuxj0HXwdKRfzM7DahoBvJtg__UI7EcRGAb_FktS_pAm88l3ShzEj8","auth":"UYVP3CV9X8FtqWbwFVkbxw"}}

let sub4 = {"endpoint":"https://fcm.googleapis.com/fcm/send/cE11w2jHI38:APA91bH3PFVT3auKTj5qzLyZz1YPNmouO3rRhvE3I-a-U2VN6P1wNQ2zMFriMVXN_4eHJl_TBeKB6rRyyjztfVDgrmFhZ6c86nNFBF_AKQv2lB4kbGAw2r-qC60-P65eExtiWvnQKK1-","expirationTime":null,"keys":{"p256dh":"BILACqF3aFm_I0cv6lReqvrMEe9brzVy5ZJo7snCfqSqzEE4FVFWH4eU9f9GRWaJRe-doWXJFhXdpsanwdbByC0","auth":"FCnwpyg3D5IcWagFYruxKw"}}

push.sendNotification(sub, "Your push message here 22");
push.sendNotification(sub2, "Hey this is working too!");
// push.sendNotification(sub3, "Hello from Windows Push!");
// push.sendNotification(sub4, "mm Hello from FCM Push!");