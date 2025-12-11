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

let sub2 = {"endpoint":"https://web.push.apple.com/QCGbB-K8igy_O8lTgSqabwvNeRXdaxKyx6lZSgPOfcpOtD7vRIKgxBiUtXBfMzDUDfcKwZpA9ffu6XsUrKLd14qZbD0NxtDqU7A9frDhnYOSKSH1TElwJTopGbc-EjKRm4jNsCvr3i0Z34Bm0ckaJ6SVf9VgZKJmoCSxFMSjlho","keys":{"p256dh":"BMzVCu67SV4r3ErlluM2VOhjLlJ2Age4R-ars71BY6ymeCWBFEltFzWtIvfz8V42N1YyLlYgtnLWt4jicxTjfYo","auth":"Y3xcWhmmNZA2xgxwm1p5lQ"}}

let sub3 = {"endpoint":"https://web.push.apple.com/QIfD0q_RFPfWqksn8jIvjnBfilYAUO6d_EitR2bfh9ar7uXFjNVwCcJRRegZqqCsogYzLZC0M4evus5sxXKfL1paVq_Y5a25DPG6546dKf_EDCVnSXJTubH7BlZ9nftVcOyuZJHE6AD3SWQytklwwbFKMov1C2rYB0OHA_ccooY","keys":{"p256dh":"BGr-4wpcNiTWo5oTDEsutVVpifCIuEnBFqywzMSEN0x87v_jPft7BNznLOjjgbQ_BMO3jYxzWKUllRzixZgUSeI","auth":"d6fVmvx9ymEEuPYJDcmAGQ"}}

let sub4 = {"endpoint":"https://fcm.googleapis.com/fcm/send/evl-YywxYhc:APA91bHA0fBjVsgeUsB4yvf6o3WdGMNYVcuRK_sHDHORRXh2OIrpslqepz3frKmvaHgB88vKaeA3PvqprPTmkU6mX-wxxMYyn0IoBSJybiSBOn3cXvgsY5iL-hMdXzLMqiHd1-EAs1eR","expirationTime":null,"keys":{"p256dh":"BGlUwGbGmJKDIyIediriQYYqnWPBUSzOz8bBI-mZ5txDLE-wqYmDkuBd9HJ93ARiIZJc3VRFTUnJ6Tcr87SnUeE","auth":"xVegiO75l5FfHfpidIPPbQ"}}

let sub5 = {"endpoint":"https://web.push.apple.com/QM4ZGdeDa6a80cgG6g-Dui7hCVLY5xhuLxCZQ9aak3iCGAQDCwQiR3viGAObQkFOVwlDFLSkiUy84RL6NpiHQxG9JqeCvj_bVRca9Qp8RViGQ_gDi2nA2_rIpYSR2VX_2arzNjmHwiN0mJ0RGgYNzeOrTQcWiIhfm4mHnWJ2n-g","keys":{"p256dh":"BIX6FCxEGg5DV0cvC8SDkqea_-mmOV76UWuOLMhTG1wqqA38tMSzm833cOOU9Z7PmyiIq2PFXuxWCo674piUyGs","auth":"CG0PcNl79Oqa5_8-uODxBw"}}

push.sendNotification(sub, "Your push message here 22");
push.sendNotification(sub2, "Hey this is working too!!");
push.sendNotification(sub3, "9 Hey this is working too!!!");
push.sendNotification(sub4, "9 mm Hello from FCM Push!");
push.sendNotification(sub5, "Final push message!");