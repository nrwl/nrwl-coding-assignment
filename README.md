# Coding assignment

The goal of this assignment is to showcase your ability to develop features and your coding style. Due to the time
constraint you will have to prioritize what you work on, and have to try and balance cleanliness with just getting it
done.

Even though the app is small, one can easily spend the whole week working on it: perfecting styles, testing every single
method, or carefully crafting every single line of code. Please don't! Do as much as you can in about two hours and
share the results.

The most important part of the interview will come after this one, when we look at the app together, talk about the
decisions you have made, etc..

You have three different options to choose from for your assignment. You only need to complete one of them:

1. A node CLI
2. An Angular app
3. A React app

## Node CLI

| ℹ️ Please only choose one assignment to work on. Either this node CLI, the [Angular](./apps/angular-client) client or the [React](./apps/react-client) client. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### Requirements

​
Please write a CLI in javascript/typescript. You are free to use any open source packages you wish. You can create your own repository from scratch or use this one.
​

### Metrics Gathering CLI

​
Build a CLI to gather metrics on a git repository. The goal is to measure how much cross collaboration there is across projects in the organization.
​

- The cli should take as an input a path to a git repository on your machine and perform the following calculation: count the number of contributors that have made commits to multiple projects. For this exercise, projects are defined as subfolders inside the root level "packages" folder.
  For example, if a repo has folders A, B and C inside the packages folder and user1 has contributed to A and B, user2 has contributed to B and C and user3 has only contributed to C, the output of this command should be 2.
- The output of this calculation should be placed in a section in the repository's root level `README.md` file. The section should be created if it doesn't exist and updated if it does.
- Write a couple of tests. The goal here is not to build a production-quality app, so don't test every single detail.
  Two or three tests should be good enough.
- Don't forget about error handling and performance. What if the repo isn't set up the way you expect? What if the repo has 1000 contributors?

An example repo to test against is set up here: https://github.com/nrwl/count-contributors-sample

## Angular or React App

| ℹ️ Please only choose one assignment to work on. Either the node CLI described above, the [Angular](./apps/angular-client) client or the [React](./apps/react-client) client. |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| ℹ️ Please only choose one to work on. |
| ------------------------------------- |

⚠️ Don't fork this repo. Instead, use
the [Download ZIP](https://codeload.github.com/nrwl/nrwl-coding-assignment/zip/refs/heads/main) link.

```bash
curl https://codeload.github.com/nrwl/nrwl-coding-assignment/zip/refs/heads/main --output nrwl-coding-assignment.zip
unzip nrwl-coding-assignment.zip
cd nrwl-coding-assignment-main
```

Then install the packages, and you're good to go!

```bash
yarn

# run app (angular)
yarn start:angular

# run app (react)
yarn start:react

# run tests
yarn test:angular
yarn test:react
```

## Ticketing managing application

Build a ticket managing app, where the user can _add_, _filter_ (by status), _assign_, and _complete_ tickets.

- The app should have two screens:

  1. the list screen and
  2. the details screen.

- You can use any state management library you want (or none at all). e.g. Redux, NgRx, XState, MobX, etc.

- Write a couple of tests. The goal here is not to build a production-quality app, so don't test every single detail. Two or three tests should be good enough.

### Server / API

The server application is available at http://localhost:4200/api when you run `yarn start:[react|angular]`.

Note that there is an intentional artificial delay on the API - PLEASE DO NOT REMOVE IT! We've added it in as a way to check your frontend application's ability to handle race conditions/loading and pending states.

Please see the [API docs here](./apps/server/README.md).

## Submitting your solution

Please send us the link to your repo on GitHub, Gitlab, etc. We will continue to work on it during the pair-programming
sessions. Please also indicate approximately how long you spent on the submission.
