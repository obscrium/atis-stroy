const admin = require('firebase-admin');
const serviceAccount = require("../atis-react-firebase-adminsdk-dc1u9-5da626960b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://atis-react.firebaseio.com'
});

const db = admin.firestore();

module.exports = {admin, db};
