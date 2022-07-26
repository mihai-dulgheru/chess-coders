# First React Form

## Description

A simple form that allows the user to send a message.

## User stories

1. The user can type any message he wants
2. The user can see a "helperText" showing the length of his message, updated in real-time
3. If there is no message or if the length of the message is larger than 160, the "helperText" will be written in red. Otherwise, "helperText" is written in black (default)
4. When the user submits the form:
- prevent the default behaviour of redirecting to a new page
- if no message was provided, show an alert: "Please enter a message."
- if the message is longer than 160 characters, show an alert: "The maximum length of the message is 160 characters."
- if the message's length is valid (between 1 and 160 characters) show an alert: "Your message was sent."

## Bonus

1. If you finish early, create a component that accepts "maxLength" as prop and use this prop throughout the component's logic.

## Good luck!