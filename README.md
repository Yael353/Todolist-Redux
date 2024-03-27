# Create a Todo List with Redux Toolkit and Next.js

In this assignment, we will practice managing global state using Redux Toolkit within a Next.js application.

### Setting Up the Project

1. Open a terminal and navigate (`cd`) to the directory where you want to create the project.
2. Create a new Next.js project: `npx create-next-app@latest todolist-redux-toolkit`.
3. Change into the project directory: `cd todolist-redux-toolkit`.
4. Install Redux Toolkit and React-Redux: `npm install @reduxjs/toolkit react-redux`.

## Completing the Assignment

Start with the code from the previous todo list assignment. Remove all `useState` and associated functions. Instead, create a slice for the todo list using Redux Toolkit's `createSlice`. Access the state using hooks from `react-redux`, and update the state using the slice's action creators.

Remember to wrap your application with a `Provider` in `_app.js` like this:

```jsx
import { Provider } from "react-redux";
import { store } from "../store"; // Adjust the path according to your file structure

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
```
