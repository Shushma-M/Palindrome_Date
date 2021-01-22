import React from "react";
import { useState } from "react";
import "./styles.css";
import image from "./processing.gif";
import image2 from "./bg.jpg";

export default function App() {
  var [opmsg, setOpmsg] = useState();
  var [opmsg2, setOpmsg2] = useState();
  var flag1, flag2, flag3, flag4, flag5, flag6;
  var ip, nextFlag, print;
  function palindromeCheck(orgNum) {
    var n = orgNum;
    var remainder = 0;
    var revNum = 0;
    while (n !== 0) {
      remainder = n % 10;
      revNum = revNum * 10 + remainder;
      n = n / 10;
      n = parseInt(n);
    }
    if (orgNum === revNum) {
      nextFlag = true;
      return true;
    } else {
      return false;
    }
  }
  function changeFormat1(date) {
    // var format1 = date.replace(/-/g, "");
    // var num1 = parseInt(format1);
    var temp = new Date(date);
    var format1 =
      "" + temp.getFullYear() + (temp.getMonth() + 1) + temp.getDate();
    var num1 = parseInt(format1);
    //console.log(num1);
    flag1 = palindromeCheck(num1);
    if (flag1 === true) {
      print =
        temp.getFullYear() + "-" + (temp.getMonth() + 1) + "-" + temp.getDate();
    }
  }
  function changeFormat2(date) {
    var temp = new Date(date);
    var format2 =
      "" + temp.getDate() + (temp.getMonth() + 1) + temp.getFullYear();
    var num2 = parseInt(format2);
    // console.log(num2);
    flag2 = palindromeCheck(num2);
    if (flag2 === true) {
      print =
        temp.getDate() + "-" + (temp.getMonth() + 1) + "-" + temp.getFullYear();
    }
  }
  function changeFormat3(date) {
    var temp = new Date(date);
    var format3 =
      "" + (temp.getMonth() + 1) + temp.getDate() + temp.getFullYear();
    var num3 = parseInt(format3);
    //console.log(num3);
    flag3 = palindromeCheck(num3);
    if (flag3 === true) {
      print =
        temp.getMonth() + 1 + "-" + temp.getDate() + "-" + temp.getFullYear();
    }
  }
  function changeFormat4(date) {
    var temp = new Date(date);
    var format4 =
      "" +
      temp.getDate() +
      (temp.getMonth() + 1) +
      temp.getFullYear().toString().substr(-2);
    var num4 = parseInt(format4);
    //console.log(num4);
    flag4 = palindromeCheck(num4);
    if (flag4 === true) {
      print =
        temp.getDate() +
        "-" +
        (temp.getMonth() + 1) +
        "-" +
        temp.getFullYear().toString().substr(-2);
    }
  }
  function changeFormat5(date) {
    var temp = new Date(date);
    var format5 =
      "" +
      (temp.getMonth() + 1) +
      temp.getDate() +
      temp.getFullYear().toString().substr(-2);
    var num5 = parseInt(format5);
    // console.log(num5);
    flag5 = palindromeCheck(num5);
    if (flag5 === true) {
      print =
        temp.getMonth() +
        1 +
        "-" +
        temp.getDate() +
        "-" +
        temp.getFullYear().toString().substr(-2);
    }
  }
  function changeFormat6(date) {
    var temp = new Date(date);
    var format6 =
      "" +
      temp.getFullYear().toString().substr(-2) +
      (temp.getMonth() + 1) +
      temp.getDate();
    var num6 = parseInt(format6);
    //console.log(num6);
    flag6 = palindromeCheck(num6);
    if (flag6 === true) {
      print =
        temp.getFullYear().toString().substr(-2) +
        "-" +
        (temp.getMonth() + 1) +
        "-" +
        temp.getDate();
    }
  }
  function checkNext() {
    nextFlag = false;
    var currDate = new Date(ip);
    var nextDate = new Date();
    for (var i = 1; nextFlag === false; i++) {
      nextDate.setDate(currDate.getDate() + i);
      changeFormat(nextDate);
    }
    var diff = Math.abs(currDate - nextDate) / 1000;
    var missDays = Math.floor(diff / 86400);
    setOpmsg2(
      "Next Nearest Palindrome date is : " +
        nextDate.toDateString() +
        "(" +
        print +
        "). You missed by " +
        missDays +
        " days"
    );
  }
  function DisplayResult() {
    if (
      flag1 === true ||
      flag2 === true ||
      flag3 === true ||
      flag4 === true ||
      flag5 === true ||
      flag6 === true
    ) {
      setOpmsg("Your Birthdate is a Palindrome Number in format: " + print);
    } else {
      setOpmsg("Your Birthdate is not a Palindrome Number");
      checkNext();
    }
  }
  function changeFormat(input) {
    changeFormat1(input);
    changeFormat2(input);
    changeFormat3(input);
    changeFormat4(input);
    changeFormat5(input);
    changeFormat6(input);
  }
  function eventHandler(event) {
    var gif;
    ip = event.target.value;
    document.getElementById("Processmsg").innerHTML = "Processing...";
    gif = document.getElementById("img");
    gif.setAttribute("src", image);
    gif.style.display = "block";

    setTimeout(() => {
      document.getElementById("Processmsg").innerHTML = "";
      gif = document.getElementById("img");
      gif.style.display = "none";
      changeFormat(ip);
      DisplayResult();
      var border = document.getElementById("box");
      border.style.borderStyle = "solid";
      border.style.borderColor = "#fd2457";
    }, 3000);
  }
  return (
    <div style={{ backgroundImage: `url(${image2})` }} className="App">
      <h1>Palindrome Birthday</h1>
      <div className="inp">
        Birthday: <input onChange={eventHandler} type="date" />
      </div>
      <br />
      <div id="Processmsg"> </div>
      <img id="img" src="" alt=""></img>
      <div id="box">
        <div> {opmsg} </div>
        <div> {opmsg2} </div>
      </div>
    </div>
  );
}
