# Dark Mode Coding Challenge 🌙 &nbsp; ![medium](https://img.shields.io/badge/-Medium-yellow) ![time](https://img.shields.io/badge/%E2%8F%B0-30m-blue)

&nbsp;

# How to launch an app

- use Node 14 `nvm install 14.19`
- install dependencies `npm install`
- run the app `npm start`

&nbsp;

# Goals / Outcomes ✨

- Using state and global state
  - Global state example in the `global-state` branch, can also be found in 1st PR
- DOM manipulation

&nbsp;

# Pre-requisites ✅

None

&nbsp;

# Requirements 📖

- Add dark-mode switching functionality to the _existing_ dark-mode button
  - ✅ Utilise the _existing_ dark-mode scss file by adding a `dark-mode` class to the root `html` element (check)
- When in Dark mode:
  - ✅ The button icon should be `faSun` (check)
  - ✅ The button icon colour should be `(#FFA500)`. You can use the `color` prop on the `Icon` component. (check)

&nbsp;

# Think about 💡

- How we would use Dark mode on other potential routes/components in a bigger application. Would your solution work for this?
  - The approach with a class name applied to html works for the whole app as long as "dark-mode" class css is expanded along side with the application growth.
  - To make it work better for a bigger app I created a hook that remembers users choice between reloads and manages html class setting.
  - Now even if app starts from `another-page` dark theme is still applied (if needed).
  - The `Router` is a trivial component to manage couple of pages was added for multi route case illustration
  - Icons are random
  - Icon color on another page shows that in order to use the dark theme (the way it is used) all colors have to be set there (if we have to pass it or use the context, then what is the point of this approach anyway?)
- How we can apply a class to the `html` DOM element
  - `document.documentElement.classList.add("dark-mode")` works fine for me. Can't say I like the approach

&nbsp;

# What's Already Been Done 🏁

- Basic app UI (mobile responsive)
- Dark mode and light mode styles/themes

&nbsp;

# Screenshots 🌄

&nbsp;
![screenshot-light](https://puu.sh/Fq13d/04a9e5ad48.png)
![screenshot-dark](https://puu.sh/Fq132/caa2fa0c6d.png)
