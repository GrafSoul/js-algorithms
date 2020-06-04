# The Algorithm - "Max Stock Profit"

## Description of the algorithm

The algorithm allows you to calculate the maximum profit received when trading stocks.
An array with prices that change over a period of time is passed to the algorithm function.
After its work, the function returns a number, this number is the maximum profit that could be earned.

## Example

```javascript
function maxStockProfit(pricesArr) {
    // Initialize the variables - the maximum profit, assign it
    // value -1 which means that you can’t make a profit,
    // and also create variable purchase prices and sale prices equal to 0
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;

    // Price Change State Variable
    let changeBuyPrice = true;

    // loop through the array with stock prices
    for (let i = 0; i < pricesArr.length; i++) {
        // Set the variable 'buyPrice' to the value of the element in the array
        if (changeBuyPrice) buyPrice = pricesArr[i];
        // Set the variable 'sellPrice' to the value of the next element in the array
        sellPrice = pricesArr[i + 1];
        // If 'sellPrice' is less than 'buyPrice' leave changeBuyPrice with true
        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            // If 'sellPrice' is greater than 'buyPrice' calculate the difference between them
            // and write to the variable 'tempProfit'
            let tempProfit = sellPrice - buyPrice;
            // If the value of 'tempProfit' is greater than the value of 'maxProfit' we assign
            // value 'tempProfit' of the variable 'maxProfit'
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            // Assign false to the price change indicator
            changeBuyPrice = false;
        }
    }
    // Return result
    return maxProfit;
}
```
