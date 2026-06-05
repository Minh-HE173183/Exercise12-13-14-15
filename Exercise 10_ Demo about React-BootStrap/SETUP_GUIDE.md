# Pizza House Website - React-Bootstrap Implementation

## Project Overview
This is a Pizza House restaurant website built with **React-Bootstrap**, following the design requirements shown in the exercise screenshot.

## Features Implemented

### 1. **Navigation Bar**
   - Pizza House branding with emoji icon
   - Navigation links: Home, About Us, Contact
   - Search bar with search button (red)
   - Responsive mobile menu

### 2. **Hero Section**
   - Full-width background image
   - Featured "Neapolitan Pizza" overlay text
   - Descriptive tagline
   - Responsive height

### 3. **Our Menu Section**
   - 4 pizza products displayed in a responsive grid
   - Product cards featuring:
     - Pizza image
     - Pizza name
     - Current price (bold, red)
     - Original price (crossed out, if on sale)
     - Sale/New badge (yellow for SALE, blue for NEW)
     - "Buy" button
   - Hover effects for better interactivity
   - Responsive: 4 columns on desktop, 2 on tablet, 1 on mobile

### 4. **Book Your Table Section**
   - Form with following fields:
     - Your Name (required)
     - Your Email (required)
     - Select a Service (dropdown)
     - Comments (textarea)
   - Yellow "Submit Reservation" button
   - Form validation
   - Success alert on submission
   - Form reset after submission

### 5. **Footer**
   - Copyright information
   - Dark background matching the overall theme

## Technologies Used
- **React** (v19.2.7)
- **React-Bootstrap** (v2.10.2) - Bootstrap components for React
- **Bootstrap** (v5.3.3) - CSS framework
- **React-Icons** (v5.0.1) - Icon library (FaSearch icon)

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm (comes with Node.js)

### Steps to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure
```
ex10/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Website icon
├── src/
│   ├── App.js              # Main App component
│   ├── App.css             # Styling
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Key Components

### App.js
- Uses React hooks (useState) for form state management
- Implements all Bootstrap components: Navbar, Container, Row, Col, Card, Form, Button
- Responsive layout using Bootstrap's grid system (xs, sm, lg breakpoints)
- Pizza data stored in an array
- Form submission handling with validation

### App.css
- Custom dark theme styling
- Responsive breakpoints for mobile, tablet, desktop
- Card hover effects
- Button styling
- Form styling

## Responsive Design
The website is fully responsive with breakpoints:
- **Mobile** (< 576px): Single column layout
- **Tablet** (576px - 768px): Two-column layout
- **Desktop** (> 768px): Four-column layout for menu items

## Placeholder Images
The website uses placeholder images from `https://via.placeholder.com/`. You can replace these with real pizza images by updating the `image` URLs in the `pizzas` array in App.js.

## Customization

### To add more pizzas:
1. Add new items to the `pizzas` array in `App.js`
2. Each pizza object needs: id, name, price, image, and optionally: originalPrice, badge

### To change colors:
- Modify the color values in `App.css`
- Use Bootstrap utility classes (e.g., `bg-dark`, `text-light`, `bg-warning`)

### To modify form fields:
- Edit the form section in App.js
- Add new fields to the `formData` state and form controls

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes
- The form currently shows a success alert on submission
- To integrate with a backend, modify the `handleSubmit` function to send data to your API
- All pizza images use placeholder service; replace with actual images for production
- The website uses Bootstrap's dark theme with custom styling

## Next Steps
1. Replace placeholder images with real pizza images
2. Connect form submission to a backend API
3. Add actual menu items from your database
4. Implement search functionality
5. Add more pages (About Us, Contact, etc.)
