# FRSC Frontend Setup Guide

This is the frontend for the FRSC Nigeria Portal built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React meta-framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icons

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Configure the API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Development

```bash
npm run dev
```

The app runs on `http://localhost:3000`

## Building

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (services)/      # Service pages
│   ├── admin/           # Admin dashboard
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable components
├── lib/
│   ├── api.ts          # API client
│   ├── validation.ts   # Zod schemas
│   └── constants.ts    # App constants
├── public/             # Static assets
└── styles/             # Additional styles
```

## Pages

### Public Pages
- `/` - Home page with quick actions
- `/verify-license` - License verification
- `/verify-plate` - Plate verification
- `/book-appointment` - Appointment booking
- `/payments` - Payment portal
- `/safety-tips` - Road safety information
- `/contact` - Contact & support

### Auth Pages
- `/login` - User login
- `/register` - User registration
- `/forgot-password` - Password recovery

### Protected Pages
- `/admin` - Admin dashboard (admin only)

## Features

✅ Mobile-responsive design
✅ Form validation with Zod
✅ API integration with Axios
✅ Authentication with JWT
✅ Admin dashboard
✅ Responsive navigation
✅ Dark mode support (future)
✅ Multi-language support (future)

## Styling

We use Tailwind CSS with custom FRSC color palette:

```
- Primary: #1F7E3A (FRSC Green)
- Secondary: #FFFFFF (White)
- Accent: #FFC107 (Yellow)
```

## API Integration

All API calls are made through the `lib/api.ts` module:

```typescript
import { api } from '@/lib/api'

// Login
const response = await api.auth.login(email, password)

// Verify License
const result = await api.license.verify(licenseNumber, dob)
```

## Form Validation

We use Zod schemas defined in `lib/validation.ts`:

```typescript
import { loginSchema } from '@/lib/validation'

const validated = loginSchema.parse(formData)
```

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Docker

```bash
docker build -t frsc-frontend .
docker run -p 3000:3000 frsc-frontend
```

## Performance

- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ CSS optimization with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

For more information, see [README.md](../../README.md)
