# Bank Account

## Instructions

Create a class `BankAccount` that implements the following requirements:
 - A bank account can be created with a name and an optional initial balance.
   - If the initial balance is not provided, the balance should be 0.
   - Log an error and abort if the initial balance is negative.
 - The bank account should have a `getBalance` method that log the account name and the current balance.
 - The bank account should have a `deposit` method that accepts a number and adds it to the balance.
   - The `deposit` method should return the new balance.
   - The `deposit` method should log an error if the number is negative.
 - The bank account should have a `withdraw` method that accepts a number and subtracts it from the balance. 
   - If the withdrawal amount is greater than the balance or if it is negative, log an error.
 - Optional : The bank account should have a `transfer` method that accepts a number and a bank account.
   - The `transfer` method should subtract the amount from the current account and add it to the other account.
   - The `transfer` method should return the new balance of the current account.
   - The `transfer` method should abort and log an error if : 
     - The number is negative 
     - The number is greater than the current balance
     - The other account is not a `BankAccount` instance
     - The other account is the same as the current account