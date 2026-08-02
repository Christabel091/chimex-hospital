const functions = require("firebase-functions");
const admin = require("firebase-admin");
const https = require("https");

admin.initializeApp();

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// Replace YOUR_CALLMEBOT_API_KEY after you activate CallMeBot
// (see README for the 2-minute activation steps)
// ─────────────────────────────────────────────────────────────
const DOCTOR_PHONE = "2348033560232"; // +234 8033560232 (no + sign)
const CALLMEBOT_API_KEY = "YOUR_CALLMEBOT_API_KEY"; // ← replace this

// Sends a WhatsApp message via CallMeBot (free service)
function sendWhatsApp(message) {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${DOCTOR_PHONE}&text=${encoded}&apikey=${CALLMEBOT_API_KEY}`;
    https
      .get(url, (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          console.log("WhatsApp sent. Response:", body);
          resolve(body);
        });
      })
      .on("error", (err) => {
        console.error("WhatsApp send failed:", err);
        reject(err);
      });
  });
}

// ─────────────────────────────────────────────────────────────
// TRIGGER 1: New Appointment Booking
// ─────────────────────────────────────────────────────────────
exports.notifyOnAppointment = functions.firestore
  .document("appointments/{docId}")
  .onCreate(async (snap) => {
    const d = snap.data();
    const message =
      `🏥 NEW APPOINTMENT REQUEST\n` +
      `──────────────────────\n` +
      `Patient: ${d.patientName}\n` +
      `Phone: ${d.phone}\n` +
      `Service: ${d.serviceType}\n` +
      `Date: ${d.appointmentDate}\n` +
      `Email: ${d.email || "Not provided"}\n` +
      `Notes: ${d.notes || "None"}\n` +
      `──────────────────────\n` +
      `Reply to confirm appointment.`;
    await sendWhatsApp(message);
  });

// ─────────────────────────────────────────────────────────────
// TRIGGER 2: New Support / Donation Pledge
// ─────────────────────────────────────────────────────────────
exports.notifyOnDonation = functions.firestore
  .document("donations/{docId}")
  .onCreate(async (snap) => {
    const d = snap.data();
    const message =
      `💰 NEW SUPPORT PLEDGE\n` +
      `──────────────────────\n` +
      `Name: ${d.fullName}\n` +
      `Phone: ${d.phone}\n` +
      `Type: ${d.supportType}\n` +
      `Amount: ${d.amount || "Not specified"}\n` +
      `Email: ${d.email || "Not provided"}\n` +
      `Anonymous: ${d.anonymous ? "Yes" : "No"}\n` +
      `Message: ${d.message || "None"}\n` +
      `──────────────────────\n` +
      `Call/WhatsApp to arrange payment.`;
    await sendWhatsApp(message);
  });

// ─────────────────────────────────────────────────────────────
// TRIGGER 3: New Contact Form Message
// ─────────────────────────────────────────────────────────────
exports.notifyOnMessage = functions.firestore
  .document("messages/{docId}")
  .onCreate(async (snap) => {
    const d = snap.data();
    const message =
      `📩 NEW CONTACT MESSAGE\n` +
      `──────────────────────\n` +
      `From: ${d.name}\n` +
      `Phone: ${d.phone || "Not provided"}\n` +
      `Email: ${d.email}\n` +
      `Subject: ${d.subject}\n` +
      `Message: ${d.message}\n` +
      `──────────────────────`;
    await sendWhatsApp(message);
  });
