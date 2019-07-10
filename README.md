# :iphone: EKommerce React Native App

An Android and iOS mobile app for the ecommerce application

#### Getting started

Please following the instructions below in order to get the application up and running. currently the app is running safely on the android platform and we intend to run the iOS once we can do so. First before setup clone the repository by running the command below.

`$ git clone https://github.com/Nsengiyunva/EKommerce.git`

1. **Install an Android emulator**.  
   You can install Android studio from [Here](https://developer.android.com/studio) plus instructions on how to run the studio. In case the emulator does not work out, you can use a physical device.

- connect your phone over usb cable
- Go to settings and enable developer options. instructions [Here](https://www.digitaltrends.com/mobile/how-to-get-developer-options-on-android/)

2. **Install dependencies**.

- For those using npm, run  
  `$ npm install`

- For those using yarn, run  
  `$ yarn install`

3. **Run the application**.  
   Since at the moment we can only run for Android platform run the command below specific to only the Android platform.  
   `$ react-native run-android`

### Solutions to known issues:

- Make sure you have given permissions to the android/.gradlew file, to do this on linux run  
  `sudo chmod u=rwx android/gradlew` or `sudo chmod rwx-rwx-rwx android/.gradlew`  
  for windows users right click the gradlew file in the android folder and give the users permissions to read, write and execute the file.

- Make sure your emulator is running and is being recognised. To check if the device is connected properly and recognised, run the following command in the terminal  
  `adb devices`  
  This will list all devices whether virtual or physically connected to your device.

- Make sure that you have enabled developer priviledges by enabling usb debugging for those debugging on physical devices. The instructions for setting up developer proviledges on android devices can be found [Here](https://www.makeuseof.com/tag/what-is-usb-debugging-mode-on-android-makeuseof-explains/)

### These are the current contributors

1. @rajanmagar
2. @Nsengiyunva
