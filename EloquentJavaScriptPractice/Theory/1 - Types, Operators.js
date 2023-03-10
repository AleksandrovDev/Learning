function displayExpressionAndResult(expressionStr, expression) {
    console.log(`Expression: ${expressionStr}. Equals: ${expression}`);
    console.log();
}


// ######################## Operators ########################################################

displayExpressionAndResult('null == 0', null == 0); // false
displayExpressionAndResult('null == undefined', null == undefined); // true
displayExpressionAndResult('null || "user"', null || 'user'); // user, return left if left is true else return false
displayExpressionAndResult('undefined || "user"', undefined || 'user'); // user
displayExpressionAndResult("'NaN' || 'user'", 'NaN' || 'user'); // Nan

// 0, NaN, "" - equal false. Other equal true

displayExpressionAndResult("null && 'user'", null && 'user'); // null, return left if left is false, else return right


// ######################## Types ########################################################

displayExpressionAndResult('typeof null', typeof null); // object

displayExpressionAndResult('typeof undefined', typeof undefined); // undefined

displayExpressionAndResult('typeof string', typeof string); // undefined
displayExpressionAndResult('typeof String()', typeof String()); // string
displayExpressionAndResult('typeof String', typeof String); // function

displayExpressionAndResult('typeof number', typeof number); // undefined
displayExpressionAndResult('typeof Number', typeof Number); // function
displayExpressionAndResult('typeof Number()', typeof Number()); // number


