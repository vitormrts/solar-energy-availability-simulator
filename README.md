# Solar Energy Availability Simulator
The Solar Energy Availability Simulator is a React.js project that uses data from a solar irradiance API to assess the availability of solar energy in a given region. The simulator provides an estimate of the amount of solar energy available in the region, allowing users to get an idea of the potential for solar energy generation.

Deploy link: https://case-77sol.vercel.app/

## 🚀 Technologies
The Solar Energy Availability Simulator was developed using the following technologies:

- TypeScript: to ensure greater security and productivity in development, with static typing and support for ES6+.
- React: to build the user interface, making it easier to manipulate components and states.
- Styled Components: for more efficient and organized component styling.
- Jest: to write and execute unit tests, ensuring better code quality and preventing errors.
- Storybook: to document and visualize components, facilitating teamwork and code maintenance.

## 🏗️ Prerequisites
Before you start, make sure you have the following requirements:

- yarn (v1.22.19 or higher)
- GIT (v2.25.1 or higher)

## 👷‍♂️ Installation
To install the dependencies, run the following command:
```
yarn
```

## ⚙️ API Configuration
Before running the project, it is necessary to configure the solar irradiance API. To do this, create a .env.local file at the root of the project and add the following environment variable:

```
REACT_APP_API_URL=<API URL>
```

Replace <API URL> with your API URL.

## 💻 Running the project
To run the project, run the following command:

```
yarn start
```

This will start the project in development mode. Open http://localhost:3000 in your browser to view it.

## ❤️ Features
The Solar Energy Availability Simulator has the following features:

- Simulation of solar energy availability based on zip code, average energy consumption (R$), and roof type;
- Presentation of results informing the investment amount, how much is saved, the total number of inverters and integrators in the region;
- Presentation of values for installment payments.
## 📔 StoryBook
To use StoryBook, run the following command:

```
yarn start-storybook
```

## ✔️ Available Commands
```
# Install dependencies
yarn

# Run tests
yarn test

# Build project
yarn build

# Start project (development)
yarn start

# Create components and utils
yarn generate

# Start Storybook
yarn start-storybook

# Run ESLint
yarn lint
```

## 🤝 How to Contribute
If you wish to contribute to the project, follow the instructions below:

Fork this repository;
- Create a new branch with your changes: `git checkout -b my-branch`;
- Make desired changes and commit them: `git commit -m 'my changes'`;
- Push your changes to the main branch: `git push origin my-branch`;
- Open a Pull Request for your changes to be reviewed.
