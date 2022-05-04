# Alexa Skill

This is an example project to develop a custom Alexa skill that will remember birthdays.

## How to use and interact with

Example:
> _"Alexa, open `remember-birthday` for X"_

where:
- Alexa = wake-word
- open = launch command (_alternatives: "start", "ask", "play"_)
- `remember-birthday` = invocation name (custom), one or more words, does not need to be unique
- for X / for {person} = utterance, what user's can say when they open/use a skill (the _'intent'_); the {person} name is a variable (or slot)

> Built-in intents: AMAZON.CancelIntent, AMAZON.StopIntent, AMAZON.HelpIntent, AMAZON.RepeatIntent

## Build

TODO

## Test

Via developer-console: TODO

## Next

- Validators
- Persistence
- Read-back commands
- Separate deployment of the backend (lambda code, deployment, hosting etc)

## References

- https://developer.amazon.com/en-US/alexa/alexa-skills-kit/get-deeper/custom-skills
- https://developer.amazon.com/en-US/docs/alexa/workshops/build-an-engaging-skill/get-started/index.html
