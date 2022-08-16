// const arr1 = [7, 4, 5, 6, 8];
// const out1 = document.querySelector(".out-1");
// const out2 = document.querySelector(".out-2");
// const out3 = document.querySelector(".out-3");

// function f1(arr, myFunc, block) {
//   arr[3] = arr[3] * 2;
//   //   out1.innerHTML = arr1;
//   myFunc(arr, block);
// }

// function showArr(arr, block) {
//   let out = "1 ";
//   console.log("out0 =", out);

//   for (let i = 0; i < arr.length; i++) {
//     out += arr[i] + "_";
//     console.log("out=", out);
//   }
//   block.innerHTML = out;
// }

// function showArr2(arr, block) {
//   let out = "1 ";
//   console.log("out0 =", out);

//   for (let i = 0; i < arr.length; i++) {
//     out += arr[i] + "*";
//     console.log("out=", out);
//   }
//   block.innerHTML = out;
// }
// f1(arr1, showArr, out1);
// f1(arr1, showArr2, out2);
// //colback
// function squad(item) {
//   return item ** 2;
// }
// // const arr2 = arr1.map(squad);
// const arr2 = arr1.map((item) => item ** 2);
// console.log(arr2);
// showArr(arr2, out3);
// input

document
  .querySelector(".b-4")
  .addEventListener("çlick", function getUserName() {
    const userName = document.querySelector(".i-4").value;
    console.log(fixUserName(userName));
  });

function fixUserName(str) {
  return str.trim().toLowerCase();
}

// function f1(arr,myFunc,block) {
//     arr[3]=arr[3]*2;
//     out1.innerHTML=arr1;
//     myFunc(arr,block);
// }
// async function pageLoader(callback) {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   callback(data);
//
// function pageLoader(callback) {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => callback(json));
// }
// function getAJAX(data) {
//   console.log("запрос");
//   console.log("ответ сервера");
//   console.log(data);
// }
// pageLoader(getAJAX);

function pageLoader(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => callback(json));
}

function getAJAX(data) {
  console.log("запрос");
  console.log("ответ сервера");
  console.log(data);
  pageLoader(
    "https://jsonplaceholder.typicode.com/users/" + data.userId,
    showUser
  );
}
function showUser(user) {
  console.log(user);
}
pageLoader("https://jsonplaceholder.typicode.com/todos/1", getAJAX);
