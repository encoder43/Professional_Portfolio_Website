# Yerram Deekshith Kumar - ML Researcher Portfolio

A professional, modern portfolio website showcasing ML research, projects, and technical expertise. Built with React and Tailwind CSS.

## 🎯 Overview

This portfolio presents a comprehensive view of my work in Machine Learning, Computer Vision, and Deep Learning, with a focus on video super-resolution research and production ML applications.

## ✨ Features

- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Animated Hero**: Interactive particle network background
- **Research Section**: Dedicated showcase for current video super-resolution work
- **Project Gallery**: Live demos and GitHub repositories for 4 production applications
- **Publications**: Academic work and research contributions
- **Certifications**: Professional development credentials with modal previews
- **Contact Form**: Integrated mailto functionality
- **Dark Theme**: Professional deep navy palette with teal accents

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Build**: Vite (recommended) or Next.js

## 📁 Project Structure

```
├── App.tsx                 # Main application entry
├── components/
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── Hero.tsx           # Animated hero section
│   ├── About.tsx          # Bio and background
│   ├── Skills.tsx         # Technical skills grid
│   ├── Projects.tsx       # Project showcase
│   ├── Research.tsx       # Research work highlight
│   ├── Publications.tsx   # Academic publications
│   ├── Certifications.tsx # Professional certifications
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Site footer
│   └── ui/                # shadcn/ui components
├── data/
│   └── content.json       # Editable content data
└── styles/
    └── globals.css        # Global styles & theme
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📝 Content Management

All content is managed through `/data/content.json` for easy updates without touching code.

### Update Personal Information

```json
{
  "personal": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
}
```

### Add a New Project

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Brief description",
      "highlights": ["Key feature 1", "Key feature 2"],
      "stack": ["React", "Python", "FastAPI"],
      "demo": "https://demo-url.com",
      "github": "https://github.com/user/repo",
      "status": "live"
    }
  ]
}
```

### Add a Certification

```json
{
  "certifications": [
    {
      "title": "Certification Name",
      "organization": "Issuing Organization",
      "issued": "Month Year",
      "logo": "org-name",
      "credential": "https://credential-url.com"
    }
  ]
}
```

## 🎨 Customization

### Colors & Theme

Edit `/styles/globals.css` to customize the color scheme:

```css
:root {
  --background: #0b1220;      /* Deep navy background */
  --foreground: #e8eef5;      /* Light text */
  --primary: #14b8a6;         /* Teal accent */
  --card: #151d2e;            /* Card background */
  /* ... more variables */
}
```

### Typography

The site uses system fonts by default. To change fonts, update the `font-family` in globals.css or import custom fonts.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

## 📊 Performance

- Lighthouse Score Target: 90+ across all metrics
- Mobile-optimized with responsive images
- Lazy loading for images and components
- Minimal JavaScript bundle

## 🔧 Development

### Adding New Sections

1. Create component in `/components/YourSection.tsx`
2. Import and add to `/App.tsx`
3. Update navigation in `/components/Navigation.tsx`
4. Add content to `/data/content.json`

### Styling Guidelines

- Use Tailwind utility classes
- Maintain consistent spacing (py-20 for sections)
- Keep hover states with `hover:` variants
- Use theme colors from globals.css

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 Live Links

### Projects
- [AI Nutritionist](https://aimealsuggestion.onrender.com)
- [AI Trip Planner](https://ai-trip-planner-ipk7.onrender.com)
- [Job Recommender](https://ai-job-recommender-aueo.onrender.com)
- [InfoGenie PDF Assistant](https://infogenie-abd.onrender.com)

### Social
- [LinkedIn](https://www.linkedin.com/in/yerramdeekshithkumar/)
- [GitHub](https://github.com/encoder43/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome via issues or pull requests.

## 📧 Contact

For any queries or collaborations:
- Email: [Update in content.json]
- LinkedIn: [Profile Link]
- GitHub: [Profile Link]

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies.
