# 🌤️ Weather App (2026 Edition)

A sleek, modern weather dashboard built with React and Tailwind CSS v4, focusing on performance and clean UI/UX.

## 🚀 Features
- **Real-time Data**: Integrated with OpenWeatherMap API.
- **SVG Icons**: Light-weight, high-quality icons using `lucide-react`.
- **Responsive Design**: Mobile-first layout with Tailwind CSS.
- **Secure Integration**: Uses `.env` for API key protection.

## 🛠️ Tech Stack
- **React 19+**
- **Vite** (Build Tool)
- **Tailwind CSS v4** (Styling)
- **Axios** (API Requests)

## 💡 What I Learned (Challenges)
During development, I overcame several hurdles:
- **API Security**: Learned to manage `.env` variables and the importance of the `VITE_` prefix in Vite projects.
- **Modern Icons**: Shifted from heavy CDN font-based icons to lightweight SVG components.
- **Asynchronous Logic**: Fixed `401 Unauthorized` errors by correctly handling API key activation and Axios response data.

## ⚙️ Setup
1. Clone the repo: `git clone <your-repo-link>`
2. Install dependencies: `npm install`
3. Add your `VITE_API_KEY` to a `.env` file.
4. Run locally: `npm run dev`
