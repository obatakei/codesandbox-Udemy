// React入門（じゃけぇ）Udemyセクション4の内容
/**const letの変数 */

// varはなんでもアリの変数 (使わない)
// letは上書き可能だが再宣言はできない
let val2 = "let変数";
console.log(val2);

// constは上書き・再宣言両方不可
// Reactはconstを使うことが多いので覚えておく

//**テンプレート文字列 */
// バッククォートと${}を使う構文
const name = "オバケイ";
const age = "30";
const message1 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message1);

// アロー関数
const func = (num1, num2) => {
  return num1 + num2;
};

console.log(func(6, 18));

// 分割代入はよく使うのでまとめておく!!

// デフォルト値
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello("obakei");
// sayHello();

// スプレッド構文
// ...で順番に処理していくイメージ
// 1.配列の展開
const arr1 = [1, 2, 6];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
//sumFunc(arr1[1], arr1[2]);
sumFunc(...arr1);

// 2.まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);

// 3.配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];
//  arr4と同じやつをコピーする
const arr6 = [...arr4];
console.log(arr6);
// 配列の結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

// mapやfilterを使った配列の処理
// 従来はfor文を使って記述
const nameArray = ["田中", "山田", "小畑"];
// for (let index = 0; index < nameArray.length; index++) {
//   console.log(nameArray[index]);
// }

// mapを使う場合
const nameArr2 = nameArray.map((name) => {
  return name;
});
console.log(nameArr2);
nameArray.map((name, index) => {
  console.log(`${index + 1}番目は${name}です。`);
});

// filterを使う場合
const numArry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumArry = numArry.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArry);

const newNameArray = nameArray.map((name) => {
  if (name === "小畑") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArray);

//　三項演算子 if文を省略したようなもの
// ある条件？　条件がtrueの時: 条件がfalseの時
const val10 = 1 < 0 ? "trueです" : "falseです";
console.log(val10);

const num = 1300;
// console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

// return部分に三項演算子を使う例
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
};
console.log(checkSum(29, 70));

// 論理演算子の本当の意味
// ||は左側がfalseなら右側を返す(左側がtrueなら左側を返す)
// &&は左側がtrueなら右側を返す
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("１か２はtrueになります");
}
if (flag1 && flag2) {
  console.log("１も２もtrueになります");
}
