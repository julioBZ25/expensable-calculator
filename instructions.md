# Expensable Calculator

![https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/o0uRBL95/ff24a0f9-54f6-4041-8611-f61e8e3df91a.png?source=viewer&v=bfbe9648296a127e35a40371dc20ed5a](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/o0uRBL95/ff24a0f9-54f6-4041-8611-f61e8e3df91a.png?source=viewer&v=bfbe9648296a127e35a40371dc20ed5a)

## The challenge

To create a beautiful and useful transaction form for `Expensable` app. When you
want to add a transaction to your expenses history, it is pretty common that you
want to make some type of calculation. For example, you want to register how
much you expend going to the movies. You bought:

- Movie ticket: $10.5
- Soda + Pop Corn combo: $8

So, instead of doing the calculation on your mind or in a different application,
Expensable will let you do it inside the transaction form. How cool is that!

## Requirements

1. The calculator will receive a `category` prop that has at least `name`
   (string), `color` (HEX value) and `icon` (react element) properties. Use this
   prop for the title and color of the calculator.
2. All the components should be styled using Emotion. Try to achieve a
   “pixel-perfect” result.
3. All the components should be showcased using Storybook.
4. The calculator will manage the state of 3 variables:
    - `prevNumber`: initially set to `null`
    - `operant`: initially set to `null`
    - `currentNumber`: initially set to `“0”`

Use a new create-react-app application for this project.

## User stories (with technical tips)

### Display the current values

At any moment, the calculator should display the current operation. An operation
could be defined as `prevNumber` + `operant` + `currentNumber` (here the ‘+’
symbol means concatenation).

Some examples:

- `prevNumber`: null, `operant`: null, `currentNumber`: 10

![https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/GGulxep1/82274bd1-c984-4a5d-80ae-0b70c7ff744f.jpg?source=viewer&v=bf6af3d94427c6bfacda72d03a5bda35](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/GGulxep1/82274bd1-c984-4a5d-80ae-0b70c7ff744f.jpg?source=viewer&v=bf6af3d94427c6bfacda72d03a5bda35)

- `prevNumber`: 10, `operant`: +, `currentNumber`: null

![https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/5zuLpon6/32226e9c-3194-4884-b9cf-d6e943915e80.jpg?source=viewer&v=b9c145ff54d9ce64d0bb8486620445ff](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/5zuLpon6/32226e9c-3194-4884-b9cf-d6e943915e80.jpg?source=viewer&v=b9c145ff54d9ce64d0bb8486620445ff)

### User can add digits

Each time the user clicks a digit button (0...9) the value will be concatenated
to the `currentNumber`.

- If the `currentNumber` is “0”, clicking the “0” button again does nothing.
- If the user clicks the dot (.), a decimal point is added to the currentNumber
- If a decimal point is already present on the `currenNumber`, clicking the dot
  again does nothing.

### User can add an operant

When the user clicks on an operant button (÷, ×, -, +), the `operant` should be
set to that value, the `prevNumber` should take the value of the `currentNumber`
and the `currentNumber` should be set to `null`. Finally, the submit button
should change to a calculate button (equals symbol instead of check symbol)

- If the `operant` already has a value (is not null), clicking on an operant
  button should replace the value of the current `operant`

### User can do a calculation

When the user clicks on the calculate button, the current operation should be
calculated and the `currentNumber` should be set to the result, the `prevNumber`
and `operant` should be set to null.

- If the `currentNumber` is null when the calculate button is clicked, it should
  take the same value as the `prevNumber`.

![https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/8LuDxee0/8d77e3ff-51f1-4ce6-a6d6-be041f7d749d.gif?source=viewer&v=fb53400bc093eecca0ee0f04d60cd706](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/8LuDxee0/8d77e3ff-51f1-4ce6-a6d6-be041f7d749d.gif?source=viewer&v=fb53400bc093eecca0ee0f04d60cd706)

### User can delete one digit

When the user clicks the **⌫** button it should remove the last digit of the
`currentNumber`.

- If the `currentNumber` only has 1 digit and the `prevNumber` and `operant` are
  null, the `currentNumber` should change to 0.
- If the `currentNumber` only has 1 digit but the `prevNumber` and `operant` are
  not null, the `currentNumber` should be set to null.
- If the `currentNumber` is null and the `prevNumber` and `operant` are not
  null, then the `currentNumber` takes the value of the `prevNumber` and the
  `prevNumber` and `operant` should be set to null.

### User can reset the calculator

When the user clicks on the C symbol, all the values return to the initial
state.

### User can submit the amount

When the user clicks the submit button (with the equals symbol), the
`currentNumber` should be printed on the console.

## Extra credits (optional)

Make the operation display an input element and add support to make all the
operations using the keyboard. You will need to control the input value and
onChange props and follow the same logic as before.

## Resources

- [Figma Design](https://www.figma.com/file/Crqtn0kqnB1EKQWZVXE3of/?node-id=4347%3A1673)
- [Figma Prototype](https://www.figma.com/proto/Crqtn0kqnB1EKQWZVXE3of/Expensable-React?page-id=4347%3A1673&node-id=4347%3A1673&viewport=241%2C48%2C1.98&scaling=min-zoom&starting-point-node-id=4347%3A1674)
