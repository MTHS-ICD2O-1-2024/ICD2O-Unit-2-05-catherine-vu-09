// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 25 2025
// This file contains the JS functions for index.html

/**
 * Calculates hourly waqe and salary
 */
function calculateSalary () {
  let hours = parseFloat(document.getElementById('hours').value);
            let rate = parseFloat(document.getElementById('rate').value);
            if (isNaN(hours) || isNaN(rate)) {
                document.getElementById('output').innerHTML = "Please enter valid numbers";
                return;
            }
            let grossPay = hours * rate;
            let tax = grossPay * 0.18; // 18% tax
            let netPay = grossPay - tax;
            document.getElementById('output').innerHTML = `Your pay will be: $${netPay.toFixed(2)}<br> The government will take: $${tax.toFixed(2)}`;
        }