//Write a program that converts a Roman numeral to an integer
function romanToInt(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };  }

    let total = 0;
    let prevValue = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanNumerals[s[i]];   }
        if (currentValue < prevValue) 
            total -= currentValue;
            return total;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    return total;

    // Write a program that calculates the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }   }
    return n * factorial(n - 1);

    ///# Write a program that generates a blog
function generateBlog(title, content) {
    return `<!DOCTYPE html>
<html>
<head>
    <title>${title}</title>
</head>
<body>
    <h1>${title}</h1>
    <p>${content}</p>
</body>
</html>
`;
}   
  