# 3D Interactive T-Shirt Store 👕✨

A modern, immersive **3D e-commerce product experience** built with **Next.js + React Three Fiber**, designed to showcase apparel in a way that feels playful, tactile, and premium.

Users can rotate a realistic 3D T-shirt model, switch between colors using intuitive gestures, select sizes, and move seamlessly toward checkout.

---

## ✨ Features

### 🧵 3D Product Experience
- Realistic **GLB-based 3D T-shirt model**
- Smooth idle floating animation for a premium feel
- City HDR environment lighting for realism

### 🎨 Color Mode
- Dedicated **Color Mode** toggle
- Swipe **up / down** to change T-shirt colors
- Smooth color interpolation (no harsh jumps)
- Camera auto-resets before entering color mode for clarity

### 🕹️ Smart Camera Controls
- Orbit controls enabled only when appropriate
- Auto-reset camera after user inactivity
- Gentle camera recentering (no jarring snaps)

### 🧠 UX-First UI
- Minimal product info overlay
- Size selector with clear active state
- CTA button enabled only after size selection
- Mobile-first & safe-area aware layout

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Three.js**
- **@react-three/fiber**
- **@react-three/drei**
- **Tailwind CSS**

---

## 📂 Project Structure

```

├── app/
│   ├── components/
│   │   ├── Scene.tsx          # 3D canvas & camera logic
│   │   ├── Tshirt.tsx         # 3D T-shirt model & interactions
│   │   ├── UI.tsx             # Product info & CTA
│   │   ├── ColorModeButton.tsx
│   │   └── ColorModeHint.tsx
│   ├── lib/
│   │   └── colors.ts          # Centralized color config
│   └── page.tsx
├── public/
│   └── models/
│       └── t_shirt.glb
└── README.md

````

---

## 🧪 Interaction Guide

| Action | Result |
|------|--------|
| Drag / Rotate | View product from all angles |
| Idle (3s) | Camera gently resets |
| Color Mode Button | Locks camera & enters color mode |
| Swipe ↑ / ↓ | Change T-shirt color |
| Select Size | Enables checkout CTA |

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm run dev
```

Open: **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Planned Enhancements

* 🛒 Add to Cart & Buy Now flow
* 💳 Checkout page with address & order summary
* 📱 Fully responsive checkout (mobile-first)
* 🧾 Order confirmation screen
* 🔗 Payment gateway integration (Razorpay / Stripe)
* 🎽 Fabric & GSM selector
* 🖼️ Texture-based designs (prints, logos)

---

## 💡 Design Philosophy

This project focuses on:

* **Reducing friction** between browsing and buying
* Making products feel **touchable, not flat**
* Treating 3D as a UX upgrade, not a gimmick

---

## 📜 License

MIT License — feel free to use, remix, and build on top of this.

---

### Built with ❤️ for modern e-commerce experiences

```
