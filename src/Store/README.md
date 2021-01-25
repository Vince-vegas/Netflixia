# Note: react patterns

# DUCKS PATTERN

every state or reducers are bundle up in "One File" because of the ducks pattern principle. You will see that all commands, events, and data fetching are bundled in one file.

This project is not that large so I choose the **ducks pattern**. I could split all commands and events on its own file if the project has **BACKEND SIDE** on it.

# Redux Toolkit

I implement [redux/toolkit](https://redux-toolkit.js.org/) because that's what **Dan Abramov** recommended when building a redux application.

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"
