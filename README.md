# appium-bootcamp

## Table of content
1. [Installation](#Installation)
2. [Framework's Structure](#frameworks-structure)
3. [Appium](#Appium)
3. [Selectors](#Selectors)

## 1. Installation

### 1.1 installing wdio and setup 
1. Clone [repository]()
2. Install the project dependencies:
```shell
   npm install
```
3. You need to create a .env file with the following variables
```bash
    USER_NAME=<add login user from the login screen>
    PASSWORD=<add login password from the login screen>
 ```


## 2. Framework's Structure
```bash
.
├── config
└──functional-testing
    ├── data
    │
    ├── screen-objects 
    │   ├── commons-screen.js
    │   ├── products-screen.js
    │   ├── login-screen.js
    │   └── base-screen.js
    │
    ├── tests
    │   ├── login-tests.js
    │   └── checkout-tests.js
    │
    └── utils

```

## 3. Appium

### 3.1 Appium inspector
Go to [appium inspector](https://github.com/appium/appium-inspector/releases) and download latest released version 

### 3.2 Appium server
go to [appium server](https://github.com/appium/appium-desktop/releases) and download latest released version


## 4 Selectors 
If there are no _element ID_, _acesibility ID_ or the  xpath of the element is too long; we recomend to use [Android UiSelector](https://developer.android.com/reference/android/support/test/uiautomator/UiSelector) and [iOS Predicates](http://appium.io/docs/en/writing-running-appium/ios/ios-predicate/). 

Read the following documentation for more detailed information about mobile [locators](https://kobiton.com/book/chapter-4-appium-locator-finding-strategies).

### 4.1 Android

Different examples for mobile locators in Android.

```javascript
Accesibility_ID: '~menu item log in',
Ui_Selector: 'android=new UiSelector().description("menu item log in")'
Xpath: '//android.view.ViewGroup[@content-desc="menu item log in"]'
```

### 4.2 iOS

Different examples for mobile locators in iOS.
```javascript
Accessibility_ID: '~menu item log in',
Class_Chain: '-ios class chain:**/XCUIElementTypeOther[`label == "Log In"`]',
Predicate_String: '-ios predicate string: type == "XCUIElementTypeOther" && label == "Log In"',
Xpath: '//XCUIElementTypeOther[@name="menu item log in"]'
```
