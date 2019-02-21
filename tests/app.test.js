const app = require('../app.js');

test('Should contain Elishka, Dan, Ashley, Connor, and Ben in alphabetical order', () => {
    expect(app.myfirstObject.myArray).toContain('Ashley', 'Ben', 'Connor', 'Dan', 'Elishka');
})

test('Should split the sentence My name is Ben into letters', () => {
    expect(app.mysecondObject.myString).toContain('M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'B', 'e', 'n');
})

test('Should contain the word codenation and then rearrange them in alphabetical order', () => {
    expect(app.myWord.mynewWord.shownewWord).toContain('acdeinnoot');
})

test('Should contain the word Benjamin and then slice them into Ben', () => {
    expect(app.myfullName.myusualName).toContain('Ben');
})

test('Should contain the fruits apple, pear, banana and then add watermelon by using the push method', () => {
    expect(app.myFruits.fruit1).toContain('apple, pear, banana, watermelon');
})