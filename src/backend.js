import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, serverTimestamp} from "firebase/database";
import uuid from "uuid-random";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let setChats;

onValue(ref(database, "reactChat"), (snapshot) => {
	updateData(snapshot.val());
});

function setData(newSetChats){
	setChats = newSetChats;
}

function updateData(data){
	const array = [];

	Object.entries(data).forEach((value) => {
		array.push({
			id: value[0],
			...value[1]
		});
	});
	array.sort((object1, object2) => object1.timestamp - object2.timestamp);

	if (array.length >= 50){
		const lastChat = array.reduce((object1, object2) => object1.timestamp < object2.timestamp ? object1 : object2);

		set(ref(database, `reactChat/${lastChat.id}`), null);
	}
	setChats(array);
}

function sendData(newUser, newMessage){
	set(ref(database, `reactChat/${uuid()}`), {
		name: newUser,
		message: newMessage,
		timestamp: serverTimestamp()
	});
}

export {setData, sendData};
