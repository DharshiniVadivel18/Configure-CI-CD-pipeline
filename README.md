# React User Info Application

## Aim
To develop a React application using reusable functional components.

## Problem Statement
Create a React application that displays user information using component-based architecture.

## Steps Completed

### 1. Install Node.js and React ✅
- Using React 18 via CDN for development
- Babel for JSX transformation

### 2. Create React Project ✅
- Project structure created in EXP5 folder
- Package.json configured

### 3. Create Functional Components ✅
- **Header**: Displays app title and subtitle
- **UserAvatar**: Shows user initials in circular avatar
- **UserInfo**: Displays user details (email, phone, company, etc.)
- **UserCard**: Combines avatar and info for each user
- **UserList**: Renders grid of user cards
- **Controls**: Load/Clear buttons with loading states
- **Stats**: Shows user count and load time
- **App**: Main component managing state

### 4. Pass Data Using Props ✅
- Props passed between all components
- User data, loading states, and callbacks
- Event handlers passed as props

### 5. Render Components ✅
- ReactDOM.render() used to mount app
- Dynamic rendering based on state
- Conditional rendering for loading/error states

## Features
- **Reusable Components**: Modular, functional components
- **Props System**: Data flows through props
- **State Management**: useState hooks for app state
- **API Integration**: Fetches real user data
- **Responsive Design**: Grid layout adapts to screen size
- **Loading States**: Visual feedback during data fetch
- **Error Handling**: Displays error messages

## How to Run
1. Open `index.html` in a web browser
2. Click "Load Users" to fetch data
3. View user cards with avatars and information

## Component Architecture
```
App
├── Header
├── Controls
├── Stats
├── UserList
    └── UserCard (multiple)
        ├── UserAvatar
        └── UserInfo
```