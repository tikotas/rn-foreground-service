# Notification API

## Methods

| Prop            | Type       | Returns                                                      | Note                                                                                                                                                           |
|-----------------|------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `start`         | `Promise`  | A promise that resolves when the notification has been sent. | Sends a notification with the specified options.                                                                                                               |
| `update`        | `Promise`  | A promise that resolves when the notification has been sent. | Sends a notification with the specified options.                                                                                                               |
| `stop`          | `Promise`  | A promise that resolves when the service has been stopped.   | Stops the foreground service. Note: Pending tasks might still complete. If startService has been called multiple times, this needs to be called as many times. |
| `stopAll`       | `Promise`  | A promise that resolves when the service has been stopped.   | Stops the foreground service. Note: Pending tasks might still complete. This will stop the service regardless of how many times startService was called.       |
| `eventListener` | `function` | A function that removes the event listener when called.      | Adds an event listener that listens for a `notificationClickHandle` event.                                                                                     |

### `start \ update` Params

| Prop             | Type                                                    | Default           | Note                                                                                                       |
|------------------|---------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------|
| id               | `number`                                                |                   | Unique notification id.                                                                                    |
| title            | `string`                                                |                   | Notification title.                                                                                        |
| message          | `string`                                                |                   | Notification message.                                                                                      |
| number           | `string`                                                |                   | Int specified as string > 0, for devices that support it, this might be used to set the badge counter.     |
| icon             | `string`                                                | `ic_notification` | Small icon name                                                                                            |
| largeIcon        | `string`                                                | `ic_launcher`     | Large icon name                                                                                            |
| visibility       | `private`, `public`,`secret`                            |                   | Visibility of the notification                                                                             |
| ongoing          | `boolean`                                               |                   | Whether the notification is ongoing. The notification the service was started with will always be ongoing. |
| importance       | `min`,`low`,`default`,`high`,`max`,`none`,`unspecified` | `default`         | Importance (and priority for older devices) of this notification. This might affect notification sound     |
| button           | `boolean`                                               |                   | Whether to include a first button in the notification.                                                     |
| buttonText       | `string`                                                |                   | Text for the first button.                                                                                 |
| buttonOnPress    | `string`                                                |                   | Action to take when the first button is pressed.                                                           |
| button2          | `boolean`                                               |                   | Whether to include a second button in the notification.                                                    |
| button2Text      | `string`                                                |                   | Text for the second button.                                                                                |
| button2OnPress   | `string`                                                |                   | Action to take when the second button is pressed.                                                          |
| mainOnPress      | `string`                                                |                   | Action to take when the main area of the notification is pressed.                                          |
| setOnlyAlertOnce | `bollean`                                               | `false`           | Whether the notification should only alert the user once                                                   |
| color            | `string`                                                |                   | Color of the notification (in hex format, e.g. #000000).                                                   |
| progress         | `{max: number, curr: number}`                           |                   | Object containing progress information for the notification                                                |

### `eventListener` Params

| Prop     | Type       | Default | Note                                                                         |
|----------|------------|---------|------------------------------------------------------------------------------|
| callBack | `function` |         | A function to be called when the `notificationClickHandle` event is emitted. |

























