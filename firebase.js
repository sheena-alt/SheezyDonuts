// 1. Import Firestore SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 2. Your NEW Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrFSH2YXCo0_xkp8or0Sa8tZILoYwus4s",
    authDomain: "sheezydonuts.firebaseapp.com",
    projectId: "sheezydonuts",
    storageBucket: "sheezydonuts.firebasestorage.app",
    messagingSenderId: "831485411292",
    appId: "1:831485411292:web:cb1aef815de8f6fab55919",
    measurementId: "G-9KPNF67823"
};

// 3. Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. Save Order Function
window.SaveOrder = async function() {
    try {
        console.log("Saving order to Sheezzy Donuts...");
        
        // Dagdagan natin ng details para makita mo sa Firestore
        const orderData = {
            item: "Donut",
            status: "Success",
            orderTime: new Date().toLocaleString()
        };

        const docRef = await addDoc(collection(db, "orders"), orderData);
        
        alert("Order Saved! ID: " + docRef.id);
        console.log("Success! Document ID:", docRef.id);
    } catch (error) {
        console.error("Error saving order:", error);
        alert("Hindi nag-save: " + error.message);
    }
};