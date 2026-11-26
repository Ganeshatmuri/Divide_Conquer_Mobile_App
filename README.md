# Divide & Conquer 🧮

A sleek, interactive calculator application built with React Native, Expo, and TypeScript.

## 📱 About the Project

Divide & Conquer is a cross-platform calculator application developed as a hands-on project to explore mobile application development using React Native and TypeScript.

The application focuses on providing a clean user interface, interactive calculator buttons, and reliable arithmetic operations.

The project is also an opportunity to learn modern frontend development concepts, component-based architecture, state management, and application deployment.

## 🛠️ Tech Stack

- **React Native** – Cross-platform mobile application development
- **Expo** – Development and build platform
- **TypeScript** – Type-safe JavaScript
- **Expo Router** – Application navigation and routing
- **EAS Build** – Android application builds

## ✨ Features

- Basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
- Decimal number support
- Clear (AC) functionality
- Backspace functionality
- Consecutive arithmetic operations
- Factorial calculation (!)
- Square root calculation (√)
- Division-by-zero error handling
- Interactive calculator buttons
- Dark-themed user interface

## 📂 Project Structure

```text
divide-and-conquer/
│
├── assets/
│
├── src/
│   ├── app/
│   │   └── index.tsx
│   │
│   ├── components/
│   │   └── calculator/
│   │       └── CalculatorButton.tsx
│   │
│   └── utils/
│       └── calculator.ts
│
├── app.json
├── eas.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git
- Expo Go (for physical-device testing)

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd divide-and-conquer
```

Install dependencies:

```bash
npm install
```

### Run the Application

Start the Expo development server:

```bash
npx expo start
```

You can run the application using:

- Expo Go on an Android or iOS device.
- An Android emulator.
- A web browser.

## 📦 Android Build

The project uses Expo Application Services (EAS) for Android builds.

To generate a preview APK:

```bash
eas build --platform android --profile preview
```

## 🧠 Learning Objectives

This project explores:

- React Native fundamentals
- TypeScript types and interfaces
- Functional components and reusable components
- React hooks and state management (`useState`)
- Event handling and user interactions
- Array methods such as `map()`
- Separating UI components from calculation logic
- Error handling and input validation
- Building and distributing Android applications

## 🔮 Future Improvements

- Calculation history
- Percentage calculations
- Memory functions (M+, M-, MR, MC)
- Improved button animations and visual effects
- Light and dark themes
- Enhanced responsive layouts

## 👨‍💻 Author

**Ganesh Atmuri**

---

*Divide & Conquer — Breaking down calculations, one operation at a time.*
