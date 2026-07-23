# How Much You Know Me? — Oduetse Edition

An interactive browser-based quiz game that tests how well a player knows **Oduetse Moaletsane**.

The game randomly selects 20 questions from a larger question bank, checks each answer, calculates a percentage score, and displays a colourful knowledge rating.

## Features

* 20 randomly selected questions per game
* Different question mix on repeat play
* Case-insensitive answer checking
* Spelling-sensitive text answers
* Flexible checking for selected dates, numbers and accepted answer variations
* Correct and incorrect answer feedback
* Live progress, correct-answer count and remaining-question count
* Animated percentage score ring
* Red–yellow–green knowledge rating bar
* Animated cartoon result message
* Optional sound effects
* Native sharing on supported phones and browsers
* Fully responsive design for mobile, tablet and desktop
* No framework or installation required

## Project Structure

```text
how-much-you-know-me/

assets
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run the Game Locally

### Simple method

Open `index.html` directly in a modern browser.

### Recommended method using Python

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

1. Sign in to GitHub.
2. Create a new public repository, for example:
`how-much-you-know-me`
3. Upload all four project files to the root of the repository.
4. Open the repository's **Settings**.
5. Select **Pages**.
6. Under **Build and deployment**, choose:

   * Source: **Deploy from a branch**
   * Branch: **main**
   * Folder: **/(root)**
7. Save the settings.
8. GitHub will publish the game at an address similar to:

```text
https://YOUR-USERNAME.github.io/how-much-you-know-me/
```

## Editing Questions

Questions are stored in the `questionBank` array near the top of `script.js`.

A standard question looks like this:

```javascript
{
  category: "Identity",
  icon: "👤",
  question: "What is my full name?",
  instruction: "Enter my first name and surname.",
  answers: \\\\\\\["Oduetse Moaletsane"]
}
```

You may add alternative acceptable answers:

```javascript
answers: \\\\\\\["Botswana Savings Bank", "BSB"]
```

For number questions, include:

```javascript
numeric: true
```

For a short written answer that must contain important words, use:

```javascript
keywords: \\\\\\\["cattle post"],
answerHint: "Because I mostly use it for the cattle post."
```

The game will continue to select only 20 questions even when more questions are added.

## Privacy Notice

This game contains personal information that has been intentionally and voluntarily provided by Oduetse solely for the purpose of creating this quiz. The content does not include any sensitive personal information, confidential information, financial information, or any other data intended to compromise privacy or security.

This project has been developed for educational and practice purposes only as part of learning and demonstrating HTML, CSS, and JavaScript. The information included is used exclusively within the context of this quiz and is not intended for any commercial, malicious, or data collection purposes.

## Technologies

* HTML5
* CSS3
* Vanilla JavaScript
* Google Fonts

## Licence

This project is for personal and non-commercial use by Oduetse Moaletsane. Add a formal licence file if broader reuse is intended.



## Privacy Notice Update

The welcome page includes a collapsible Privacy Notice. It is closed by default and expands when selected.



## Personal photograph

The game uses `assets/oduetse.png` on the welcome screen and in the quiz sidebar.
Keep the `assets` folder together with `index.html`, `style.css`, and `script.js`
when running the game locally or uploading it to GitHub Pages.

