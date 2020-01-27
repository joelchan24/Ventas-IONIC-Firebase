// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,  
  // la conexión que te da firebase al crear el proyecto 
  firebaseConfig : {
    apiKey: "AIzaSyA8FZ_eqokdNH0n4AuTdJxriAg1Gtx0o4Q",
    authDomain: "quicktrade-9f871.firebaseapp.com",
    databaseURL: "https://quicktrade-9f871.firebaseio.com",
    projectId: "quicktrade-9f871",
    storageBucket: "quicktrade-9f871.appspot.com",
    messagingSenderId: "368737313448",
    appId: "1:368737313448:web:2c1a4c16bd672e5432d89d",
    measurementId: "G-TFHSGZXDDF"
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
