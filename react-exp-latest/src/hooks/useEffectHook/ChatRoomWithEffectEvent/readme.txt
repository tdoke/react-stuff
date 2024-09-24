1] Logic inside event handlers is not reactive. It will not run again unless the user performs the same interaction (e.g. a click) again. 
Event handlers can read reactive values without “reacting” to their changes.
Logic inside Effects is reactive. If your Effect reads a reactive value, you have to specify it as a dependency. Then,
if a re-render causes that value to change, React will re-run your Effect’s logic with the new value.
2] Logic inside event handlers is not reactive 
Take a look at this line of code. Should this logic be reactive or not?

    // ...
    sendMessage(message);
    // ...
From the user’s perspective, a change to the message does not mean that they want to send a message. 
It only means that the user is typing. In other words, the logic that sends a message should 
not be reactive. It should not run again only because the reactive value has changed. That’s why
it belongs in the event handler:

  function handleSendClick() {
    sendMessage(message);
  }
  Event handlers aren’t reactive, so sendMessage(message) will only run when the user clicks the Send button.
3] Logic inside Effects is reactive 
Now let’s return to these lines:

    // ...
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // ...
From the user’s perspective, a change to the roomId does mean that they want to connect to a different room. In other words, 
the logic for connecting to the room should be reactive. You want these lines of code to “keep up” with the reactive value, 
and to run again if that value is different. That’s why it belongs in an Effect:

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect()
    };
  }, [roomId]);
Effects are reactive, so createConnection(serverUrl, roomId) and connection.connect() will run for every distinct value of roomId. 
Your Effect keeps the chat connection synchronized to the currently selected room.

4] Extracting non-reactive logic out of Effects 
Use a special Hook called useEffectEvent to extract this non-reactive logic out of your Effect:
You can think of Effect Events as being very similar to event handlers. The main difference is that event handlers run in response to 
a user interactions, whereas Effect Events are triggered by you from Effects. Effect Events let you “break the chain” between 
the reactivity of Effects and code that should not be reactive.





