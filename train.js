console.log("Jack Ma maslahatleri");
const list = [
  "yaxshi talaba bolish", //0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "ozingizga ishlashingizni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi toq endi", //60
];
//Async function
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number", null);
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    ////Promise function qayta koramz
    return new Promise((resolve, rejact) => {
      setTimeout(function () {
        resolve(null, list[5]);
      }, 5000);
    });
  }
}
///call via then/catch
// // console.log("passed here 0");
// // maslahatBering(20)
// //   .then((data) => {
// //     console.log("javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR:", err);
// //   });
// // console.log("passed here 1");

// //asyn await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(40);
//   console.log(javob);
//   javob = await maslahatBering(50);
//   console.log(javob);
// }
// run();
