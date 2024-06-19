import Stack from "./Stack";

const isOperator = (op) => {
    const operators = ["+", "-", "*", "/", "^", "%"];
    return operators.includes(op);
}

const getPrecedence = (op) => {
    if (op == "^") {
        return 3;
    } else if (op == "*" || op == "/" || op == "%") {
        return 2;
    } else if (op == "+" || op == "-") {
        return 1;
    } else {
        return 0;
    }
}

export const infixToPostfix = (exp) => {
    const stack = new Stack();
    let res = [];
    for (let token of exp) {
        if (!isOperator(token) && token != '(' && token != ')') {
            res.push(token);
        } else if (token == '(') {
            stack.push(token);
        } else if (token == ')') {
            // Process operators until encountering the opening parenthesis for this closing one
            while (!stack.isEmpty() && stack.peek() != '(') {
                res.push(stack.peek());
                stack.pop();
            }
            // Discard the opening parenthesis (don't add it to result)
            stack.pop();
        } else {
            if (getPrecedence(token) > getPrecedence(stack.peek())) {
                stack.push(token);
            } else {
                while (!stack.isEmpty() && getPrecedence(token) <= getPrecedence(stack.peek())) {
                    res.push(stack.peek());
                    stack.pop();
                }
                stack.push(token);
            }
        }
    }
    // Append remaining operators from the stack
    while (!stack.isEmpty()) {
        res.push(stack.peek());
        stack.pop();
    }
    return res;
}

export const evaluatePostfix = (exp) => {
    const stack = new Stack();
    for (let token of exp) {
        if (!isOperator(token)) {
            stack.push(parseInt(token)); // Convert operand to integer
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;
            switch (token) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    // Handle division by zero
                    if (operand2 === 0) {
                        throw new Error("Division by zero");
                    }
                    result = operand1 / operand2;
                    break;
                case "^":
                    result = Math.pow(operand1, operand2);
                    break;
                case "%":
                    result = operand1 % operand2;
                    break;
                default:
                    throw new Error("Invalid operator");
            }
            stack.push(result);
        }
    }
    // Check if only one element remains in the stack (the final result)
    if (stack.size() !== 1) {
        throw new Error("Invalid postfix expression");
    }
    return stack.pop();
}

export const createExpression = (btn) => {
    // code here
}