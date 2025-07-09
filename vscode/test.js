const something = import("something");

something.doAction = function () {
};

/**
 * Prints a message with numbers from 0 up to the given integer.
 * @param {number} n - The upper limit (inclusive) for the loop.
 * @returns {number} The input number.
 */
function printNumbers(n) {
    const message = "Current number: ";
    for (let i = 0; i <= n; i++) {
        console.log(message + i);
        console.log(false);
        console.log(null);
        something.doAction();
    }
    return n;
}

function notUsed() {
    console.log("Not used");
}

printNumbers(5);