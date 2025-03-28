// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 25 2025
// This file contains the JS functions for index.html

/**
 * Calculates hourly waqe and salary
 */
function calculateSalary () {
 // input
            const hoursWorked = parseFloat(document.getElementById('hours').value);
            const hourlyRate = parseFloat(document.getElementById('rate').value);

            // process
            const grossEarnings = hoursWorked * hourlyRate;
            const taxAmount = grossEarnings * 0.18; // 18% tax
            const netEarnings = grossEarnings - taxAmount;

            // output
            document.getElementById('output').innerHTML = 'Your pay will be: $' + netEarnings.toFixed(2) + '<br> The government will take: $' + taxAmount.toFixed(2);
        }