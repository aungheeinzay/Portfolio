# Portfolio Template

A modern, responsive and customizable developer portfolio template built with **Next.js** and **Tailwind CSS**.

This project is designed to be used as a **personal portfolio template**. You don't need to rebuild the UI from scratch — simply replace the example data with your own information and make the portfolio your own.

## 🌐 Live Demo

**[View Live Portfolio](https://portfolio-steel-eight-1lp6tkr2rc.vercel.app/)**

---

## ✨ Features

* ⚡ Built with Next.js
* 🎨 Modern and clean developer portfolio UI
* 📱 Fully responsive design
* 🌙 Dark-themed design
* 🧩 Data-driven portfolio sections
* 🛠️ Skills / tech stack section
* 🚀 Projects showcase
* 👤 About section
* 📜 Education and journey section
* 🏆 Certificates / credentials section
* 📄 Dynamic resume data
* 🔗 Social media links
* 📧 Contact section
* 🎞️ Smooth animations and interactions
* 🔍 SEO-friendly architecture
* ☁️ Easy deployment with Vercel

---

## 🧑‍💻 Why This Template?

Creating a portfolio from scratch can take a lot of time, especially when you want a polished UI and reusable structure.

This template separates the **UI** from the **personal data**.

Instead of modifying components throughout the project, you can mainly customize:

```text
lib/
├── fakedata/
└── resumedata/
```

Add your own:

* Personal information
* Skills
* Projects
* Social links
* Education
* Certificates
* Resume information
* Other portfolio content

The UI will use your data automatically.

---

## 🛠️ Tech Stack

| Technology           | Purpose         |
| -------------------- | --------------- |
| Next.js              | React framework |
| TypeScript           | Type safety     |
| Tailwind CSS         | Styling         |
| React                | UI development  |
| GSAP                 | Animations      |
| Lucide / React Icons | Icons           |
| Vercel               | Deployment      |

---

## 📂 Project Structure

A simplified structure looks like this:

```text
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
│
├── components/
│   ├── header/
│   ├── hero/
│   ├── skills/
│   ├── projects/
│   ├── about/
│   ├── credentials/
│   ├── connect/
│   └── ...
│
├── lib/
│   ├── fakedata/
│   │   ├── ...
│   │   └── ...
│   │
│   └── resumedata/
│       ├── ...
│       └── ...
│
├── public/
│   ├── images/
│   └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

> The exact project structure may change as the template evolves.

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/aungheeinzay/Portfolio.git
```

Move into the project:

```bash
cd Portfolio
```

## 2. Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

Or using yarn:

```bash
yarn install
```

## 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🎨 Customize Your Portfolio

The main purpose of this project is to make customization simple.

You should **not need to rewrite the components** just to create your own portfolio.

Instead, update the data inside:

```text
lib/fakedata/
```

and:

```text
lib/resumedata/
```

---

## 👤 Personal Information

Replace the example personal information with your own:

```text
lib/fakedata/
```

Depending on the data structure, you can customize things such as:

* Name
* Role
* Location
* Bio
* Profile image
* Email
* Social links
* Availability
* About information

---

## 🧰 Skills

Update the skills / technology data with the technologies you actually use.

For example:

```ts
const skills = [
  {
    name: "Next.js",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Frontend",
  },
  {
    name: "Node.js",
    category: "Backend",
  },
];
```

You can add, remove or modify technologies according to your own experience.

---

# 🚀 Projects

Projects are one of the most important parts of the portfolio.

Add your own projects instead of using the example projects.

A project can contain information such as:

```ts
{
  title: "My Project",
  description: "A short description of the project.",
  problem: "What problem does this project solve?",
  solution: "How did I solve the problem?",
  architecture: "How is the application structured?",
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL"
  ],
  githubUrl: "https://github.com/...",
  liveUrl: "https://..."
}
```

### Recommended project information

For each project, try to explain:

1. **What is the project?**
2. **What problem does it solve?**
3. **How did you solve it?**
4. **What technologies did you use?**
5. **What architecture or important technical decisions did you make?**
6. **GitHub repository**
7. **Live demo**

This makes the portfolio more useful for recruiters and other developers.

---

# 📄 Resume

Resume information is separated from the main portfolio data.

You can customize:

```text
lib/resumedata/
```

The resume can be adapted for different roles such as:

* Full-Stack Developer
* Frontend Developer
* Backend Developer

You can change the resume information according to the position you are applying for.

For example:

```ts
type ResumeRole =
  | "full-stack"
  | "frontend"
  | "backend";
```

This allows the same portfolio project to generate different resume versions based on the target role.

---

# 🏆 Certificates

Add your own certificates and credentials to the corresponding data inside:

```text
lib/fakedata/
```

You can include information such as:

* Certificate name
* Issuing organization
* Issue date
* Certificate image
* Certificate source
* Verification URL

---

# 🔗 Social Links

Replace the example social links with your own:

```text
GitHub
LinkedIn
Telegram
Facebook
Email
Website
```

Only include platforms that you actually use.

---

# 🖼️ Images

Replace the example images in:

```text
public/
```

with your own:

* Profile image
* Project screenshots
* Certificate images
* Other portfolio assets

Make sure the image paths match the paths used by your data.

---

# ⚙️ Environment Variables

If you add features that require external services, create:

```text
.env.local
```

For example:

```env
RESEND_API_KEY=your_api_key
```

Do **not** commit your `.env.local` file or expose secret API keys publicly.

---

# 📦 Build for Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

---

# ☁️ Deployment

The easiest way to deploy this project is with **Vercel**.

### 1. Push your repository to GitHub

```bash
git add .
git commit -m "customize portfolio"
git push
```

### 2. Import the repository into Vercel

Connect your GitHub repository to Vercel and deploy.

After deployment, you will get your own portfolio URL.

---

# 🧑‍🎨 Make It Your Own

This template is intentionally designed so developers can customize the **content without rebuilding the entire UI**.

### You mainly need to change:

```text
lib/fakedata/
lib/resumedata/
public/
```

### You normally don't need to change:

```text
components/
```

unless you want to modify the design or add new functionality.

---

# 💡 Customization Workflow

A recommended workflow is:

```text
1. Fork / Clone the repository
            ↓
2. Install dependencies
            ↓
3. Run the development server
            ↓
4. Replace fake data
            ↓
5. Replace images
            ↓
6. Add your projects
            ↓
7. Customize resume data
            ↓
8. Update social links
            ↓
9. Test responsive UI
            ↓
10. Build
            ↓
11. Deploy to Vercel
```

---

# 🤝 Contributing

Contributions are welcome.

If you find a bug, have an improvement, or want to add a useful feature:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/my-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "add my feature"
```

5. Push the branch

```bash
git push origin feature/my-feature
```

6. Open a Pull Request

---

# 📜 License

This project is provided as a portfolio template.

You are free to use the template as a starting point for your own personal portfolio.

You may customize:

* Personal information
* Projects
* Skills
* Resume
* Certificates
* Images
* Social links
* Colors
* UI
* Components

Please replace the original author's personal information and example content with your own.

---

# ⭐ Support

If you find this template useful, consider giving the repository a ⭐ on GitHub.

It helps the project reach more developers who are looking for a modern portfolio template.

---

## 👨‍💻 Author

**Aung Heein Zay**

Full-Stack Developer · Myanmar

* Portfolio: https://portfolio-steel-eight-1lp6tkr2rc.vercel.app/
* GitHub: https://github.com/aungheeinzay

---

> **Build once. Customize your data. Make it yours.**
