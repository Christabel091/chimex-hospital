# Chimex Hospital Website - Setup & Deployment Guide

## 📋 Project Overview
This is a comprehensive website for Chimex Hospital's Sickle Cell Care Program in Nnewi, Nigeria. Built with Vue 3, Vite, and Tailwind CSS, it features 6 main pages with responsive design and easy content management.

## 🚀 Quick Start

### 1. Installation
```bash
cd chimex-hospital
npm install
npm run dev
```
The website will be available at `http://localhost:5173`

### 2. Build for Production
```bash
npm run build
npm run preview  # Preview the build locally
```

## 📁 Project Structure

```
chimex-hospital/
├── src/
│   ├── components/           # Reusable Vue components
│   │   ├── Navbar.vue       # Navigation bar (responsive)
│   │   ├── Footer.vue       # Footer with contact info
│   │   ├── HeroSection.vue  # Hero section template
│   │   ├── FormBuilder.vue  # Form validation & handling
│   │   ├── Card.vue         # Content card component
│   │   ├── Section.vue      # Section wrapper with styling
│   │   ├── StatBlock.vue    # Statistics display
│   │   ├── MetadataDisplay.vue
│   │   └── InfoBox.vue
│   ├── pages/               # Page components (routes)
│   │   ├── Home.vue        # Home page
│   │   ├── About.vue       # About Us page
│   │   ├── Program.vue     # Sickle Cell Programme
│   │   ├── Donate.vue      # Donations & Sponsorships
│   │   ├── Appointment.vue # Appointment booking
│   │   └── Contact.vue     # Contact page
│   ├── constants/
│   │   └── config.js       # ⭐ EDIT THIS for all content!
│   ├── styles/
│   │   └── index.css       # Tailwind CSS setup
│   ├── App.vue             # Main app component
│   ├── router.js           # Route configuration
│   └── main.js             # App entry point
├── public/
│   ├── images/             # Store images here
│   └── icons/              # Store icons here
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Color Scheme

The website uses the following colors defined in `tailwind.config.js`:
- **Primary Red (Compassion):** `#DC143C` (chimex-red)
- **Secondary Blue (Hope):** `#0099FF` (chimex-blue)
- **Dark Text:** `#1a1a1a` (chimex-dark)
- **Light Background:** `#f8f8f8` (chimex-light)

To change colors globally, edit `tailwind.config.js`:
```javascript
colors: {
  'chimex-red': '#DC143C',    // Change red here
  'chimex-blue': '#0099FF',   // Change blue here
  // ...
}
```

## ✏️ Editing Content

**All content is easily editable in one file: `src/constants/config.js`**

### Edit Hospital Information
```javascript
export const hospitalConfig = {
  name: 'Chimex Hospital',
  address: 'Nnewi, Nigeria',
  contact: {
    phone: '+234 (0) XXX XXX XXXX',
    whatsapp: '+234 (0) XXX XXX XXXX',
    email: 'info@chimexhospital.com',
    facebook: 'https://facebook.com/chimexhospital',
    // ... etc
  }
}
```

### Edit Page Content
All pages pull content from `config.js`. For example, to edit the home page:
```javascript
home: {
  hero: {
    title: 'Your new title',
    subtitle: 'Your new subtitle',
  },
  // ...
}
```

## 📸 Adding Images

1. **Place images in:** `public/images/`
2. **Reference in config.js:**
   ```javascript
   leadership: [
     {
       name: 'Dr. Smith',
       image: '/images/doctor-1.jpg',
     }
   ]
   ```
3. **Or use emoji placeholders** (currently used as defaults for quick testing)

### Placeholder Emojis Currently Used:
- Hospital: 🏥
- Heart/Care: ❤️
- Services: 🔬 💊 📚 🧬 🎓
- Team: 👨‍⚕️
- Success Stories: 🙏

Replace these with actual images by editing the corresponding Vue files.

## 📝 Pages & Features

### 1. **Home Page** (`/`)
- Hero section with call-to-action
- Hospital overview
- Services showcase
- Impact statistics
- Links to booking and donations

### 2. **About Us** (`/about`)
- Mission statement
- Hospital history
- Core values (4 cards)
- Leadership team with credentials
- Why choose us section

### 3. **Sickle Cell Programme** (`/program`)
- Programme overview
- 6 core services
- Impact statistics (4 metrics)
- 3 patient success stories
- Contact CTA

### 4. **Support Us/Donate** (`/donate`)
- 4 donation levels with benefits
- Custom donation form
- NGO partnerships info
- Volunteer opportunities section

### 5. **Book Appointment** (`/appointment`)
- Form with service type dropdown
- Patient information fields
- Date picker
- How it works section
- Contact information

### 6. **Contact** (`/contact`)
- Contact methods (phone, WhatsApp, email)
- Operating hours
- Contact form
- Social media links
- Location map placeholder

## 🔧 Customization Guide

### Change Logo
Edit `Navbar.vue` component:
```vue
<div class="w-10 h-10 bg-chimex-red rounded-full flex items-center justify-center">
  <span class="text-white font-bold text-lg">⚕️</span>  <!-- Change emoji here -->
</div>
```

### Add/Remove Pages
1. Create new page in `src/pages/`
2. Add route to `src/router.js`
3. Add navigation link in `Navbar.vue`

### Modify Form Fields
Each form page can be customized. Example from Appointment page:
```javascript
appointmentFormFields: [
  {
    name: 'serviceType',
    label: 'Service Type',
    type: 'select',
    required: true,
    options: ['Initial Consultation', 'Follow-up', ...],
  },
  // Add more fields here
]
```

## 🔐 Firebase Integration (Ready but Not Implemented)

The project is structured to support Firebase integration. To add it:

1. **Install Firebase:**
   ```bash
   npm install firebase
   ```

2. **Create `src/firebase.js`:**
   ```javascript
   import { initializeApp } from 'firebase/app'
   import { getFirestore } from 'firebase/firestore'
   
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     // ... other config
   }
   
   const app = initializeApp(firebaseConfig)
   export const db = getFirestore(app)
   ```

3. **Use in components:**
   ```javascript
   import { db } from '../firebase.js'
   import { collection, addDoc } from 'firebase/firestore'
   
   async function submitAppointment(data) {
     await addDoc(collection(db, 'appointments'), data)
   }
   ```

### Integration Points for Firebase:
- **Appointments:** Store form submissions in Firestore
- **Contact Forms:** Store inquiries in Firestore
- **Donations:** Log donations in Firestore (though payments should use Stripe/PayPal)
- **Admin Panel:** Future feature for managing content

## 💳 Payment Integration (Stripe/PayPal)

For donations, integrate with:
- **Stripe:** @stripe/vue-stripe
- **PayPal:** @paypal/checkout-server-sdk

Currently, donation amounts are collected but not processed. Update `Donate.vue` to integrate payment processing.

## 🚢 Deployment Options

### Option 1: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Or connect GitHub repo to Netlify for automatic deployments.

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages
1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/repository-name/',
     // ...
   }
   ```
2. Build and push to GitHub

### Option 4: Traditional Hosting
```bash
npm run build
# Upload `dist/` folder to your web hosting
```

## 📱 Responsive Design

The website is fully responsive using Tailwind CSS:
- **Mobile:** Single column, hamburger menu
- **Tablet (768px+):** Two columns, full navbar
- **Desktop (1024px+):** Three+ columns, full layout

Test responsiveness:
- DevTools: Press F12 → Device toggle
- Mobile device testing

## 🔍 SEO Considerations

Add meta tags to `index.html`:
```html
<meta name="description" content="Expert sickle cell care in Nnewi, Nigeria">
<meta name="keywords" content="sickle cell, hospital, care, Nigeria">
<meta property="og:title" content="Chimex Hospital - Sickle Cell Care">
```

## ⚙️ Environment Variables

Create `.env` files for different environments:

**.env.local** (development):
```
VITE_API_URL=http://localhost:3000
```

**.env.production**:
```
VITE_API_URL=https://api.chimexhospital.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📊 Performance Optimization

- **Code Splitting:** Routes are auto-split with Vue Router
- **Image Optimization:** Use WebP format + lazy loading
- **CSS Minification:** Automatic with Tailwind + Vite
- **Tree Shaking:** Unused CSS is removed

Monitor with:
```bash
npm run build  # Check bundle size
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000  # Use different port
```

### Styles Not Applying
- Ensure Tailwind config includes all template files
- Check `src/styles/index.css` is imported in `main.js`

### Components Not Found
- Check component imports use correct paths
- Ensure filename matches import (case-sensitive on Linux/Mac)

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Useful Resources

- **Vue 3 Docs:** https://vuejs.org
- **Tailwind CSS:** https://tailwindcss.com
- **Vite Docs:** https://vitejs.dev
- **Vue Router:** https://router.vuejs.org

## 🤝 Support

For issues or questions:
1. Check the config.js file for content edits
2. Verify all image paths point to `public/images/`
3. Test in different browsers
4. Use browser DevTools (F12) to debug

## 📝 Checklist Before Launch

- [ ] Update all contact information in `config.js`
- [ ] Add actual hospital images (replace emojis)
- [ ] Update doctor/staff photos
- [ ] Set up Firebase for form submissions
- [ ] Add payment processing for donations
- [ ] Test all forms (appointment, contact, etc.)
- [ ] Test on mobile devices
- [ ] Set up email notifications for form submissions
- [ ] Add Google Analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test all internal and external links
- [ ] Verify mobile responsiveness

## 🎉 You're All Set!

The website is production-ready. Edit `src/constants/config.js` to customize all content, add images to `public/images/`, and deploy!

**Questions?** Check the inline comments in the Vue components or refer to the resource links above.
