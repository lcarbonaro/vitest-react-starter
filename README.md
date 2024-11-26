# Vite + React + Vitest

## Learning Steps

### Set-up & first test

1. npm create vite@latest

2. simplify boiler plate
    - clear out App.jsx
    - create MyComponent
    - add MyComponent in App

3. npm install --save-dev vitest @testing-library/react

4. update vite config
    - test: {
    globals: true,
    environment: "jsdom"
  }

5. update package.json scripts
    - "test":"vitest"

6. create MyComponent.test.jsx

7. npm run test
    - first run will ask for jsdom

Optional: Vitest UI dashboard
    - add "test:ui":"vitest --ui" to package.json scripts
    - npm run test:ui

### Component behaviour test

1. in App.jsx
    - add count display and useState

2. add new component IncreaseCount

3. create test module for new component
    - add test that increment button renders
    - add test that count intially zero
        - getByRole('paragraph')

4. add test that button click increases count to 1
    - getByRole('button')
    - fireEvent

## Resources and further reading:

- ### [DEV.to article by Abhishek V.](https://dev.to/abhi0498/vitest-blazing-fast-component-testing-for-react-2992)

- ### [Vitest expect() docs](https://vitest.dev/api/expect.html)

- ### [Testing Library docs & examples](https://testing-library.com/)


