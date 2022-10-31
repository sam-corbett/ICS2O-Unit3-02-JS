// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-02-JS/sw.js", {
    scope: "/ICS2O-Unit3-02-JS/",
  })
}

/**
 * This function displays an alert.
 */
function calculateVOLUME() {
  //input
  const length = parseInt(document.getElementById("length-of-pyramid").value)
  const width = parseInt(document.getElementById("width-of-pyramid").value)
  const height = parseInt(document.getElementById("height-of-pyramid").value)

  //process
  const volume = (length * width * height) / 3

  //output
  document.getElementById("volume").innerHTML =
    "The Volume For This Pyramid is: " + volume.toFixed(2) + "cm³"
}
