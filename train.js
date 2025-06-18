// console.log("Jack Ma maslahatleri");
// const list = [
//   "yaxshi talaba bolish", //0-20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "ozingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi toq endi", //60
// ];
// //Async function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     ////Promise function qayta koramz
//     return new Promise((resolve, rejact) => {
//       setTimeout(function () {
//         resolve(null, list[5]);
//       }, 5000);
//     });
//   }
// }
////call via then/catch
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

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

// function task(letter, text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(task("e", "engineer"));

// function qoldiqTopish(a, b, callback) {
//   if (b === 0) callback("Mahraj Nolga teng bololmaydi", null);
//   else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// console.log("PASSED A");
// qoldiqTopish(10, 3, (err, data) => {
//   if (err)
//     console.log(err);
//   else console.log(data);
// });
// console.log("PASSED B");

// // B-TASK:

// // Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// // MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= `0` && str[i] <= `9`) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

// TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }
//   _getCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     const time = this._getCurrentTime();
//     console.log(
//       `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`
//     );
//   }

//   sotish(tovar, miqdor) {
//     if (this[tovar] === undefined) {
//       console.log(`Do'konda ${tovar} yo'q`);
//       return;
//     }
//     if (this[tovar] < miqdor) {
//       console.log(`Do'konda ${tovar} yetarli emas`);
//       return;
//     }
//     this[tovar] -= miqdor;
//     const time = this._getCurrentTime();
//     console.log(`Sotildi: ${miqdor}ta ${tovar} (${time})`);
//   }

//   qabul(tovar, miqdor) {
//     if (this[tovar] === undefined) {
//       console.log(`Do'konga yangi tovar qo'shildi: ${tovar}`);
//       this[tovar] = 0;
//     }
//     this[tovar] += miqdor;
//     const time = this._getCurrentTime();
//     console.log(`Qabul qilindi: ${miqdor}ta ${tovar} (${time})`);
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// Task D:

// function checkContent(harf1, harf2) {
//   const a1 = harf1.split("").sort().join("");
//   const a2 = harf2.split("").sort().join("");

//   return a1 === a2;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("flexy", "xyfla"));

//Task E
function getReverse(text) {
  return text.split(``).reverse().join(``);
}
let a = "hello world";
let natija = getReverse(a);

//call
console.log(natija);
