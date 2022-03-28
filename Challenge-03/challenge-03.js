export default function isValid(letter) {
    let parenthesisCounter = 0;
    let characterCounter = 0;
    const length = letter.length;
    for (let i = 0; i < length; i++) {
        if (letter[i] === ')') {
            parenthesisCounter -= 1;
            if (characterCounter === 0) return false;
            characterCounter = 0;
        }
        else if (parenthesisCounter > 0 && letter[i] === ' ') return false;
        else if (letter[i] === '(') parenthesisCounter += 1;
        else if (parenthesisCounter > 0) characterCounter += 1;

    }

    return true;
}