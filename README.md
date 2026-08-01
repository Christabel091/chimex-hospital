# Chimex Hospital - Sickle Cell Care Website

A modern, professional, and fully responsive website for Chimex Hospital's specialized sickle cell care program in Nnewi, Nigeria.

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
