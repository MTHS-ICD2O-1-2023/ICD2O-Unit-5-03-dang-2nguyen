// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function checking() {
  const usernumber = parseInt(document.getElementById("number").value)
  if (usernumber >= 17) {
    document.getElementById("result").innerHTML = "you can see R movie alone"
  }
  else if (usernumber >= 13) {
    document.getElementById("result").innerHTML = "you have can see PG-13 movie alone"
  }
  else if (usernumber >= 5) {
    document.getElementById("result").innerHTML = "you have can see a G or PG movie alone"
  }
  else {
    document.getElementById("result").innerHTML = "you are too young for most thing"
  }
}