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

let sub2 = {"endpoint":"https://web.push.apple.com/QAdY4SSnGoEYhXnrK0dTqUoViJ7dzYeSBQMHu8_jczZKvgVgP67TmTG0_XkFHHimGMGVSUyxJKy4Qu5e98vtGv9HppIE5--JFa7WwDcIPmtjfHVoMDZ8r3-RyFF57rl_1flEaOcUVgFsBjKIPR2JRxCFGzPV0xRrnrKaKJjhfoU","keys":{"p256dh":"BM3JYU0UF198zC0RmCb6JiuhvhePsRrRcYsY794QATFkld2wyOk5PjrjdNokF3ymQK_HbYrQCllj2-Gfi-nNaS8","auth":"PD8Rl2R5wVIYsAtKBpiOAw"}}

push.sendNotification(sub, "Your push message here 2");
push.sendNotification(sub2, "Hey this is working too!");