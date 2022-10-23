    # Bank Account

## Instructions

Create a class `BankAccount` that implements the following requirements:
 - A bank account can be created with a name and an optional initial balance.
   - If the initial balance is not provided, the balance should be 0.
 - The bank account should have a `getBalance` method that log the account name and the current balance.
 - The bank account should have a `deposit` method that accepts a number and adds it to the balance.
   - The `deposit` method should return the new balance.
   - The `deposit` method should throw an error if the number is negative.
 - The bank account should have a `withdraw` method that accepts a number and subtracts it from the balance. 
   - If the withdrawal amount is greater than the balance, throw an error.