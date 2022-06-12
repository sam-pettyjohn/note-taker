# Note Taker

## Description

Application that can be used to write and save notes. This application uses an Express.js back end, and both saves and retrieves note data from a JSON file. The deployed application is hosted on Heroku.

Visit the deployed webpage [here!](https://intense-beach-59321.herokuapp.com/)

## Table of Contents

- [Note Taker](#note-taker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Objectives](#objectives)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Additional Criteria](#additional-criteria)
  - [Mock Up](#mock-up)
  - [Built With](#built-with)
  - [License](#license)

## Objectives
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

### Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Additional Criteria

**Technical: 40%**

- Satisfies all of the preceding acceptance criteria plus the following:
  - Application front end must connect to an Express.js back end.
  - Application back end must store notes with unique IDs in a JSON file.
  - Application must be deployed to Heroku.

**Deployment: 36%**

- Application deployed at live URL.
- Application loads with no errors.
- Application GitHub URL submitted.
- GitHub repository contains application code.

**Application Quality: 11%**

- Application console is free of errors.

**Repository Quality: 13%**

- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains quality README file with description, screenshot, and link to deployed application.

**Bonus: +10 Points**
- Application allows users to delete notes.

## Mock Up
![mockup](./assets/images/mock-up.gif)

## Built With

- Markdown
- HTML
- CSS
- JavaScript
- Express.js

## License
MIT License

Copyright (c) 2022 Sam Pettyjohn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
