# nuxtjs-firebase

So I've made my first Nuxt.js App on Firebase🔥because I am really curious what Nuxt.js can do and What I can do with it.  
This is made with [this great tutorial video](https://www.youtube.com/watch?v=ZYUWsjUxxUQ) (Shout out to Firebase team!!).

## Tools
* [vue-cli](https://github.com/vuejs/vue-cli)
* [firebase-tools](https://github.com/firebase/firebase-tools)
* node
* npm
* yarn

## Versions
```shell
$ sw_vers
ProductName:    Mac OS X
ProductVersion: 10.12.6

$ node -v
v8.9.1

$ yarn -v
1.5.1

$ vue -V
2.9.3

$ firebase -V
3.17.7
```

## How to deploy
```shell
$ cd functions
$ yarn # npm i

$ cd ../src

# make and put build files in a functions directory
$ yarn build # npm run build

# Copy static files to public directory
$ cd ../
$ cp -R functions/nuxt/dist public

# Start firebase hosting and functions on your Mac
$ firebase serve --only functions,hosting -p 5004

=== Serving from '/Users/username/Work/nuxt-ssr'...

i  functions: Preparing to emulate functions.
Warning: You're using Node.js v8.9.1 but Google Cloud Functions only supports v6.11.5.
i  hosting: Serving hosting files from: public
✔  hosting: Local server: http://localhost:5004

✔  functions: ssrapp: http://localhost:5005/vue-firebase-dc79a/us-central1/ssrapp
```
Launch a browser and open http://localhost:5004
