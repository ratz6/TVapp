Hey folks!

If you want to experience this app on your TV emulator, pleae make sure you're react-native setup is ready. Once ready, follow the commands >

 1) Clone the repo : git clone https://github.com/ratz6/TVapp.git
 2) Go into the TVapp folder : cd TestApp
 3) Install Node Modules if missing : yarn install

For Apple TV (tvOS) > 

 4) Pod Install : cd ios 
                  pod install
 5) Run the App : cd .. 
                  react-native run-ios  --simulator "Apple TV" --scheme "TestApp-tvOS"

For Android TV > 
  
 4) Run the App : yarn run android or react-native run-android

In case you run into set-up issues please go through the following links once > 

* https://reactnative.dev/docs/environment-setup
* https://github.com/react-native-tvos/react-native-tvos

Hope it works. Cheers!
