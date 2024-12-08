# Unexpected 0 Return Value for Null Inputs

This repository demonstrates an uncommon bug in JavaScript involving the handling of null values in a function. The function `foo` is designed to add two numbers. However, it returns 0 if either input is null, regardless of whether the other input is valid. This behavior is not intuitive and can lead to unexpected results.

## Bug Description

The bug lies in the `if` statement within the `foo` function.  Instead of performing the addition and returning a number if only one of the parameters is null, the current logic returns 0 in all cases involving at least one null parameter.  This is an unexpected behavior that's easy to miss.

## Solution

The solution corrects the function to handle null inputs appropriately. If one of the inputs is null, it uses 0 as a replacement; if both are null it still returns 0.  This way the result reflects the intent of the addition operation more naturally and accounts for missing input.
