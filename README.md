# Chimex Hospital - Sickle Cell Care Website

A modern, professional website for Chimex Hospital's free sickle cell care programme in Nnewi, Nigeria.  
Built with **Vue 3 + Vite + Tailwind CSS + Firebase**.

---

## ✏️ STEP 1 — Edit Your Content Before Going Live

**All personal/hospital info is in ONE file:**  
📄 `src/constants/config.js`

Open that file and fill in every placeholder marked with `XXX` or `[Name]`.

### Things you MUST update before deploying:

```javascript
// src/constants/config.js

contact: {
  phone: '+234 (0) XXX XXX XXXX',       // ← Real hospital phone number
  whatsapp: '+234 (0) XXX XXX XXXX',    // ← WhatsApp number doctors check
  email: 'info@chimexhospital.com',     // ← Real email address
  facebook: 'https://facebook.com/chimexhospital',   // ← Real Facebook page URL
  instagram: 'https://instagram.com/chimexhospital', // ← Real Instagram URL
  linkedin: 'https://linkedin.com/company/chimexhospital',
  youtube: 'https://youtube.com/@chimexhospital',
},

address: 'Nnewichi, Nnewi, Anambra State, Nigeria', // ← Full address

about: {
  leadership: [
    {
      name: 'Dr. [Full Name]',            // ← Real doctor name
      title: 'Chief Medical Officer',
      qualifications: 'MD, Hematology Specialist',
      experience: '20+ years in sickle cell care',
      image: '/images/doctor-1.jpg',      // ← Add photo (see images guide below)
    },
    // ... add more doctors
  ],
},
```

### Adding Photos
1. Put hospital/doctor photos in the `public/images/` folder
2. Name them clearly: `doctor-1.jpg`, `hospital-front.jpg`, `team.jpg`
3. Update the `image:` path in `config.js` to match

---

## 🔔 STEP 2 — Set Up Doctor Notifications (How Doctors Get Alerted)

When someone submits an appointment or support form, the data saves to Firebase.  
**To automatically notify doctors via WhatsApp or email**, use one of these options:

### Option A: Firebase Extension (Email) — Easiest
1. Go to [Firebase Console](https://console.firebase.google.com) → your project
2. Click **"Extensions"** in the left sidebar
3. Search **"Trigger Email"** → Install it
4. Connect it to a Gmail account the doctors check
5. Every new `appointments` or `donations` document will trigger an email

### Option B: WhatsApp Notification via Twilio (Requires account)
1. Sign up at [twilio.com](https://twilio.com) (free trial available)
2. Enable the WhatsApp Sandbox
3. Add a Firebase Cloud Function that triggers on new documents and sends a WhatsApp message
4. **Tell me your doctor's WhatsApp number and I will write the function code for you**

### Option C: Check Firebase Console Manually (Works now, no setup needed)
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click your `chimex-hospital` project
3. Click **Firestore Database**
4. You will see three collections:
   - `appointments` — all booking requests (name, phone, service, date)
   - `donations` — all support pledges (name, phone, amount, type)
   - `messages` — all contact form submissions
5. Call/WhatsApp each person from there

---

## 🔐 STEP 3 — Secure Your Firebase Database

Before deploying, change your Firestore security rules:

1. Go to [Firebase Console](https://console.firebase.google.com) → Firestore Database → **Rules** tab
2. Replace everything with this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write: if true;   // Anyone can submit forms ✓
      allow read: if false;   // Only you can read via console ✓
    }
  }
}
```

3. Click **Publish**

---

## 🚀 STEP 4 — Deploy to Firebase Hosting (Free, Recommended)

Firebase Hosting is free and gives you a shareable link immediately.

### One-time setup (do once):
```bash
npm install -g firebase-tools
firebase login
```

### Deploy:
```bash
cd chimex-hospital
npm run build
firebase init hosting
```

When `firebase init` asks questions, answer:
- **What do you want to use as your public directory?** → type `dist`
- **Configure as a single-page app?** → `y`
- **Overwrite dist/index.html?** → `n`

Then:
```bash
firebase deploy
```

Your live link will look like: `https://chimex-hospital.web.app`

---

## 🌐 STEP 5 — Custom Domain (Optional, ~$10–15/year)

To use a custom domain like `chimexhospital.com`:

1. **Buy a domain** from one of these (cheapest options):
   - [Namecheap.com](https://namecheap.com) (~$9/year)
   - [Google Domains](https://domains.google) (~$12/year)

2. In Firebase Console → Hosting → **Add custom domain**
3. Follow Firebase's instructions to point your domain to Firebase
4. SSL (https://) is included free

---

## 📱 STEP 6 — Optional: WhatsApp Business

For the hospital to look professional on WhatsApp:
1. Download **WhatsApp Business** app on the hospital phone
2. Set up a business profile with hospital name, hours, and address
3. Update the WhatsApp number in `config.js`
4. The website will link directly to that number

---

## ✅ Pre-Launch Checklist

- [ ] Update all contact info in `src/constants/config.js`
- [ ] Add real doctor/hospital photos to `public/images/`
- [ ] Update doctor names and qualifications in `config.js`
- [ ] Set Firestore security rules (Step 3 above)
- [ ] Set up email notifications (Step 2 above)
- [ ] Test all 3 forms (appointment, support, contact)
- [ ] Run `npm run build` — make sure no errors
- [ ] Deploy with `firebase deploy`
- [ ] Share your `.web.app` link!

---

## 🔧 Quick Start (Development)

```bash
cd chimex-hospital
npm install
npm run dev
```
Visit: `http://localhost:5173`

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/constants/config.js` | ⭐ ALL content — edit this first |
| `src/pages/` | The 6 page components |
| `src/components/` | Navbar, footer, reusable parts |
| `src/firebase.js` | Firebase connection |
| `public/images/` | Put all photos here |

## 🏥 Pages

| Page | URL | What it does |
|------|-----|-------------|
| Home | `/` | Welcome, services, stats, CTA |
| About Us | `/about` | Mission, team, values |
| Programme | `/program` | Services, success stories, impact |
| Support Us | `/donate` | Pledge form → saves to Firebase |
| Book Appointment | `/appointment` | Booking form → saves to Firebase |
| Contact | `/contact` | Contact info, message form, social |

---

**Built with ❤️ for Chimex Hospital — Caring for Sickle Cell Warriors in Nnewi, Nigeria**


## ✨ Features

- ✅ **6 Complete Pages** - Home, About, Program, Donate, Appointment Booking, Contact
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Easy Content Management** - Edit all content in one config file
- ✅ **Professional Components** - Navbar, footer, hero section, form builder
- ✅ **Modern Tech Stack** - Vue 3 + Vite + Tailwind CSS
- ✅ **Forms with Validation** - Appointment booking, donations, contact forms
- ✅ **SEO Ready** - Proper structure and meta tags
- ✅ **Accessibility** - WCAG compliant markup
- ✅ **Firebase Ready** - Pre-configured for database integration
- ✅ **Production Ready** - Ready to deploy to Netlify, Vercel, or traditional hosting

## 🎨 Color Scheme

- **Primary:** Crimson Red (#DC143C) - Compassion & Healthcare
- **Secondary:** Bright Blue (#0099FF) - Hope & Trust
- **Text:** Dark (#1a1a1a) - Readability
- **Background:** Light (#f8f8f8) - Professional

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` (or the port shown in terminal)

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/constants/config.js` | ⭐ **EDIT THIS** - All content & messaging |
| `src/pages/` | All 6 page components |
| `src/components/` | Reusable Vue components |
| `src/styles/index.css` | Tailwind CSS configuration |
| `src/router.js` | URL routing setup |
| `SETUP_GUIDE.md` | Detailed setup & customization guide |

## 🎯 Pages Overview

1. **Home** (`/`) - Welcome, services, impact stats
2. **About** (`/about`) - Mission, values, leadership team
3. **Program** (`/program`) - Services, success stories, impact
4. **Donate** (`/donate`) - Donation levels, forms, volunteering
5. **Appointment** (`/appointment`) - Booking form with validation
6. **Contact** (`/contact`) - Contact info, forms, map, social media

## ⚡ Quick Edits

### Change Hospital Name & Contact Info
Edit `src/constants/config.js`:
```javascript
export const hospitalConfig = {
  name: 'Chimex Hospital',
  address: 'Nnewi, Nigeria',
  contact: {
    phone: '+234 (0) XXX XXX XXXX',
    email: 'info@chimexhospital.com',
    // ... more
  }
}
```

### Update Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'chimex-red': '#DC143C',   // Change this
      'chimex-blue': '#0099FF',  // Change this
    }
  }
}
```

### Add Images
1. Place images in `public/images/`
2. Update paths in `config.js` or components
3. Replace emoji placeholders with image URLs

## 🚢 Deployment

### Netlify (Recommended)
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Upload dist/ folder to your hosting
```

See `SETUP_GUIDE.md` for detailed deployment instructions.

## 🔧 Tech Stack

- **Framework:** Vue 3
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** Vue Router
- **Node Version:** 18+
- **Package Manager:** npm

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🔐 Security

- No sensitive data stored in code
- Form submissions don't auto-send (requires backend integration)
- Ready for Firebase integration
- HTTPS recommended for production

## 📚 Documentation

- **Setup Guide:** `SETUP_GUIDE.md` - Detailed customization, deployment, Firebase integration
- **Component Docs:** Comments in each Vue file
- **Config Reference:** `src/constants/config.js` - All editable content

## ✅ Pre-Launch Checklist

- [ ] Update all contact info in `config.js`
- [ ] Add hospital images and photos
- [ ] Test all forms
- [ ] Set up Firebase (if using)
- [ ] Configure payment processing (for donations)
- [ ] Test on mobile devices
- [ ] Set up email notifications
- [ ] Add Google Analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate

## 🆘 Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**Styles not showing:**
- Restart dev server
- Clear browser cache (Ctrl+Shift+Delete)

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

**Built with ❤️ for Chimex Hospital - Caring for Sickle Cell Warriors in Nnewi, Nigeria**
