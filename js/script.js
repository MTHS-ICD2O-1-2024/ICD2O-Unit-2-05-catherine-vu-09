// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 25 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Calculates hourly waqe and salary
 */
function calculateSalary () {

  //input
  const hoursworked = parseFloat(document.getElementById('hours-worked').value)
  const hourlywage = parseFloat(document.getElementById('hourly-wage').value)
  
  //process
  const weeklypay = (hoursworked * hourlywage) * (1.00 - 0.18)
  const incometax = (hoursworked * hourlywage) * 0.18

  //output
  document.getElementById('weeklypay').innerHTML = 'Your pay will be: $'+ weeklypay.toFixed(2)
  document.getElementById('incometax').innerHTML = 'The government will take: $ ' + incometax.toFixed(2)
  }
  