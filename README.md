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
import ReactNativeForegroundService from "@supersami/rn-foreground-service";
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

## [Notification](documentation/Notification.md)

## [Task](documentation/Task.md)
