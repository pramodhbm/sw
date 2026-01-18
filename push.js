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

// let sub2 = {"endpoint":"https://web.push.apple.com/QCGbB-K8igy_O8lTgSqabwvNeRXdaxKyx6lZSgPOfcpOtD7vRIKgxBiUtXBfMzDUDfcKwZpA9ffu6XsUrKLd14qZbD0NxtDqU7A9frDhnYOSKSH1TElwJTopGbc-EjKRm4jNsCvr3i0Z34Bm0ckaJ6SVf9VgZKJmoCSxFMSjlho","keys":{"p256dh":"BMzVCu67SV4r3ErlluM2VOhjLlJ2Age4R-ars71BY6ymeCWBFEltFzWtIvfz8V42N1YyLlYgtnLWt4jicxTjfYo","auth":"Y3xcWhmmNZA2xgxwm1p5lQ"}}

// let sub3 = {"endpoint":"https://web.push.apple.com/QIfD0q_RFPfWqksn8jIvjnBfilYAUO6d_EitR2bfh9ar7uXFjNVwCcJRRegZqqCsogYzLZC0M4evus5sxXKfL1paVq_Y5a25DPG6546dKf_EDCVnSXJTubH7BlZ9nftVcOyuZJHE6AD3SWQytklwwbFKMov1C2rYB0OHA_ccooY","keys":{"p256dh":"BGr-4wpcNiTWo5oTDEsutVVpifCIuEnBFqywzMSEN0x87v_jPft7BNznLOjjgbQ_BMO3jYxzWKUllRzixZgUSeI","auth":"d6fVmvx9ymEEuPYJDcmAGQ"}}

// let sub4 = {"endpoint":"https://fcm.googleapis.com/fcm/send/evl-YywxYhc:APA91bHA0fBjVsgeUsB4yvf6o3WdGMNYVcuRK_sHDHORRXh2OIrpslqepz3frKmvaHgB88vKaeA3PvqprPTmkU6mX-wxxMYyn0IoBSJybiSBOn3cXvgsY5iL-hMdXzLMqiHd1-EAs1eR","expirationTime":null,"keys":{"p256dh":"BGlUwGbGmJKDIyIediriQYYqnWPBUSzOz8bBI-mZ5txDLE-wqYmDkuBd9HJ93ARiIZJc3VRFTUnJ6Tcr87SnUeE","auth":"xVegiO75l5FfHfpidIPPbQ"}}

// let sub5 = {"endpoint":"https://web.push.apple.com/QM4ZGdeDa6a80cgG6g-Dui7hCVLY5xhuLxCZQ9aak3iCGAQDCwQiR3viGAObQkFOVwlDFLSkiUy84RL6NpiHQxG9JqeCvj_bVRca9Qp8RViGQ_gDi2nA2_rIpYSR2VX_2arzNjmHwiN0mJ0RGgYNzeOrTQcWiIhfm4mHnWJ2n-g","keys":{"p256dh":"BIX6FCxEGg5DV0cvC8SDkqea_-mmOV76UWuOLMhTG1wqqA38tMSzm833cOOU9Z7PmyiIq2PFXuxWCo674piUyGs","auth":"CG0PcNl79Oqa5_8-uODxBw"}}

let pramodh = {"endpoint":"https://web.push.apple.com/QCR7qfOSSO2mb7FX8nLh4RfCTvFRI2rHRSj8ODGZhydAVn00xw9_ZK5_tWJYGuLe0tY21DAgOo9QhncoZwakpYxsM0-uvAjetSrIsVdpNt-aJPfTvRNtKpbjCmwKWX-jvaOyombJmgaS_v-2mJsYLL6ZjV399jrZEzXKgJwHqaU","keys":{"p256dh":"BN1qjqP-3_QlZx12tZAKaAehTjjfAd5Knd4mJTAiBGGaNofMf_JXWtMZ1AkDZy5nMFD4YIdU2TPVzkCVS3Ha6_g","auth":"Ngk5WodeKwxWJLsVBA22OQ"}}

// let pramodh_ios = {"endpoint":"https://web.push.apple.com/QMazlv4FACtesKbqJbywbdqqPq_vS3g248qQW_YfdKSVzbuJb9rhYqt5csiacb38aSuk4fDKUy1N40Z-NWuom_a79WI9S_lminx0opS4AE5GhKbOYwmAyyxm3X28f9NcLgABzlphr_zFe-1A4HSXSvUY7DZ8mpNa6l8Wh81L9xc","keys":{"p256dh":"BActVi4jSp3SPzYKaNldfvMU_kusfuQI7W2sdYbbt1rkjO6m7Xnl9Lq8A09wM8ZrBBQEc9lsL9g0nwvG-psbGsY","auth":"XBpI7h6RDUmCPDCNWhBhGA"}}

let pramodh_chrome_w = {"endpoint":"https://fcm.googleapis.com/fcm/send/dZKlphk8IhQ:APA91bEP5mjTeYlB1fB4rmXjUJbDHXqwJAJPpCREt3rS2b7lqv4Y1kZicqTwC348VR9Ub88AFxCw_o1YaZTjZCEttuKFiqvLswYzYAEtuc4ARzUnwgGy-m9iPpuH2-jWrkbT8fLhwxCm","expirationTime":null,"keys":{"p256dh":"BGG__UyxqPwH7n1ogRP2Lc2T-RLyrbfXeJVb8fnFpfdcY9hkmpzKuh6iXpODX943zyWTUi7tGopKcAiLgp2KZ7w","auth":"DY0a6SWX_aKcpvLVQckXFA"}}

let pramodh_andriod_r = {"endpoint":"https://fcm.googleapis.com/fcm/send/ci-vWf4uUHk:APA91bGaMKMhi7QDYUTo4rtPhJkfV9B0k8lbexsXASM8IzGmKTOVQk_kLmU6kV3zj0QxpsMwWZldlFuPOzh7U7OskfrldaxQZN173AuWS0mbLX8wRKyhyvMzfRfFAkKgmlbwSAzZSKBT","expirationTime":null,"keys":{"p256dh":"BFyNh4wy6ysO8AOLRx7B6ZKy4Z6BALXEf-LUAh0G7TeZ7jyouiWIaheChIp6fLDqJ8gqZxQ5ys4oqn9s0phi8II","auth":"a6tuKpBPLlgQkWpPwFPHlg"}}

let pramodh_andriod_m = {"endpoint":"https://fcm.googleapis.com/fcm/send/c67xzLoxs8w:APA91bFc1E7s0cscNedQRPQfvcnt0xX2UnentZrlL2qMf-wpaDEq7CkJGmFFcGu3zuMWSGVLZWxcp27GnFYy98sCT30BRkrPsJBvFxggDlqLL0TK6-OBdduJE53Z2GNMOlGW4Ld80tPN","expirationTime":null,"keys":{"p256dh":"BDX28ZnTTkzZk8cC_QFTNlzlRn6eePRobFK8VS983ZJEnkoJ5E_kehJJ06UqOMFJWLqnAEXrj0omKZIqN3BXTSU","auth":"tQe7ZTyHaJvuO6YBfQpCug"}}

push.sendNotification(pramodh, 'Hello Pramodh, from web-push library! - M1')
push.sendNotification(pramodh_chrome_w, 'Hello Chrome Windows, from web-push library! - M1')

// push.sendNotification(pramodh_andriod_r, 'Hello Android R, from web-push library! - M1')
//   .catch(function(error) {
//     console.error('Error sending Push Notification:', error);
//   });

// push.sendNotification(pramodh_andriod_m, 'Hello Android M, from web-push library! - M1')
//   .catch(function(error) {
//     console.error('Error sending Push Notification:', error);
//   });
