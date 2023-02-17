import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase);

exports.newAlertAll = functions.firestore
  .document('Alert/{alertId}')
  .onCreate(async (event) => {
    const data = event.data();
    const payload = {
      notification: {
        title: data.Title,
        body: data.Body,
      },
    };
    const db = admin.firestore();
    const tokens: string[] = [];
    (
      await db.collection('Profile').where('Role', 'in', data.Roles).get()
    ).forEach((profile) => tokens.push(profile.get('DeviceId')));
    return admin
      .messaging()
      .sendToDevice(tokens, payload, { priority: 'high' });
  });
