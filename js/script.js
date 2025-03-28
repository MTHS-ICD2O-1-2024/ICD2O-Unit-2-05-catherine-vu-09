// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 25 2025
// This file contains the JS functions for index.html

/**
 * Calculates hourly waqe and salary
 */
function calculateSalary () {
  let hours = parseFloat(document.getElementById("hours-worked").value);
    let rate = parseFloat(document.getElementById("rate-per-hour").value);
    
    if (!isNaN(hours) && !isNaN(rate)) {
      let totalPay = hours * rate;
      let tax = totalPay * 0.18; // Assuming a 10% tax rate
      let afterTaxPay = totalPay - tax;
      
      document.getElementById("total-pay").innerText = "Your payment is: $" + totalPay.toFixed(2);
      document.getElementById("government-tax").innerText = "The government will take: $" + tax.toFixed(2);
    } else {
      document.getElementById("total-pay").innerText = "Please enter valid numbers.";
      document.getElementById("government-tax").innerText = "";
    }
  }