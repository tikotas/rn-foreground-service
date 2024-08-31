# rn-foreground-service-v

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Getting Started](#getting-started)

### API

- [Notification](#notification)
- [Task](#task)

## Introduction

This project provides a foreground service that you can use to create an always-on background task in React Native. A
foreground service in Android is a service that displays a notification that cannot be removed until the service is
stopped. This allows the app to continue running tasks in the background, even if the app is closed.

A common use case for this service is tracking a user's location. With the help of Headless.js and a foreground service,
you can continue tracking the user's location even if the app has been killed from the recent tasks list, provided that
the necessary permissions have been granted.

## Installation

```
npm i rn-foreground-service-v
```

The installation for the foreground service is straightforward and seamless. With the new v2 update, the service can
auto-link itself with your application.

### Automatic Linking

Simply run the following command once, and the service will automatically link with your application:

```bash
node node_modules/rn-foreground-service-v/postinstall.js
```

If the above command does not correctly link your application, you can try manually linking the service.

### Manual Linking

#### Step 1:

In the MainActivity file, inside the `<activity>` tag, add the following metadata and services:

```
<meta-data
    android:name="com.tikotas.foregroundservice.notification_channel_name"
    android:value="Sticky Title"
/>
<meta-data
    android:name="com.tikotas.foregroundservice.notification_channel_description"
    android:value="Sticky Description."
/>
<meta-data
    android:name="com.tikotas.foregroundservice.notification_color"
    android:resource="@color/blue"
/>
<service android:name="com.tikotas.foregroundservice.ForegroundService"></service>
<service android:name="com.tikotas.foregroundservice.ForegroundServiceTask"></service>
```

#### Step 2:

Inside the `res/values` folder, create a file named `colors.xml` and add the following:

```
<resources>
    <item name="blue" type="color">#00C4D1</item>
    <integer-array name="androidcolors">
        <item>@color/blue</item>
    </integer-array>
</resources>
```

## Important Notes

With Android 13, you need to explicty ask for a Post notification permission by the users, this repository does and will
not contain code to request perission by the users.

Also you need to mention the permission in android manifest as well

```
<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
```

For android 14 you need to add another permission as well.

```
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

for tracking location add this alongside to the above permission.

```
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />
```

## Getting Started

After Installing and linking the application, the rest of the procedure is pretty stragihtforward. You need register a
headless task and and create a foreground service.

#### Step 1:

In your root, `index.js` file paste the following code.

```
import ReactNativeForegroundService from "rn-foreground-service-v";
ReactNativeForegroundService.register();
```

If you are using expo prebuild version, you should first create `index.js` file in the root directory of your project
and then in
your `package.json`
file replace

```
"main": "node_modules/expo/AppEntry.js",
```

with

```
"main": "index.js",
```

The above code will register an initial headless task, which will be a first layer, over which, you can add as many task
as you desire and they all will execute seamlessly.

#### Step 2:

Create a task and add it the execution queue anywhere in your application, you can create a task like this.

```
ReactNativeForegroundService.add_task(() => update(), {
  delay: 1000,
  onLoop: true,
  taskId: "taskid",
  onError: () => console.log("Error logging:"),
});
```

#### Step 3:

Creating a foreground service, so that your headless task stays active.

```
ReactNativeForegroundService.start({
  id: 1111,
  title: "Foreground Service",
  message: "Foregrund is active",
  icon: "ic_launcher",
  button: true,
  button2: true,
  buttonText: "Button",
  button2Text: "Second Button",
  buttonOnPress: "cray",
  setOnlyAlertOnce: true,
  color: "#000000",
  progress: {
    max: 100,
    curr: 50,
  },
});
```

# Notification

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

# Task

## Methods

| Prop               | Type       | Returns                                                                                  | Note                                                                   |
|--------------------|------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| `add_task`         | `function` | The ID of the added task.                                                                | Adds a new task to the task queue.                                     |
| `update_task`      | `function` | The ID of the updated task.                                                              | Updates an existing task in the task queue.                            |
| `remove_task`      | `function` | `void`                                                                                   | Removes a task from the task queue.                                    |
| `is_task_running`  | `function` | `true` if the task is in the queue, `false` otherwise.                                   | Checks if a task with the specified ID is currently in the task queue. |
| `remove_all_tasks` | `function` | `void`                                                                                   | Removes all tasks from the task queue.                                 |
| `get_task`         | `function` | An `object` representing the task, or `null` if no task with the specified ID was found. | Gets the task with the specified ID from the task queue.               |
| `get_all_tasks`    | `function` | An `object` containing all tasks in the queue, with task IDs as keys.                    | Gets all tasks currently in the task queue.                            |

### `add_task \ update_task` Params

| Prop    | Type               | Default | Note                                                                     |
|---------|--------------------|---------|--------------------------------------------------------------------------|
| task    | `function`         |         | A function or Promise that represents the task to be added to the queue. |
| options | [object](#Options) |         | An object containing the following options. See below options            |

### Options

| Prop        | Type       | Default  | Note                                                                   |
|-------------|------------|----------|------------------------------------------------------------------------|
| `delay`     | `number`   | `5000`ms | The delay in milliseconds between each execution of the task           |
| `onLoop`    | `boolean`  | `true`   | Whether the task should be executed repeatedly after the initial delay |
| `taskId`    | `string`   |          | A unique ID for the task / The ID of the task to be updated            |
| `onSuccess` | `function` |          | A function to be called when the task succeeds.                        |
| `onError`   | `function` |          | A function to be called when the task fails.                           |

### `remove_task` Params

| Prop   | Type     | Default | Note                              |
|--------|----------|---------|-----------------------------------|
| taskId | `string` |         | The ID of the task to be removed. |

### `is_task_running` Params

| Prop   | Type     | Default | Note                             |
|--------|----------|---------|----------------------------------|
| taskId | `string` |         | The ID of the task to check for. |

### `get_task` Params

| Prop   | Type     | Default | Note                            |
|--------|----------|---------|---------------------------------|
| taskId | `string` |         | The ID of the task to retrieve. |





