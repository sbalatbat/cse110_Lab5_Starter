# Lab 5 - Starter

Name: Sarah Balatbat

## Part 3. Unit Testing with Jest

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - I would not use a unit test to test the "message" feature because there's many units that need to be considered within that feature alone, such as whether the input message is what was received, whether the receiver was the one indicated by the sender, and limitations on the message contents (length, plain text, symbols, formatting, multimedia, etc). A test that covers considerably many variables isn't really a *unit* test.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes, this is one limitation imposed on the message contents which can be isolated from other variable aspects of the messaging application. Since the only thing that needs to be considered is the length of the message, a unit test is perfect for it.