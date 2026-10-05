# WanderLust 🏡

A full-stack web application for discovering, creating, and managing property listings.

WanderLust is designed as a platform where users can explore property listings, view listing details, create their own listings, and interact with other users through reviews.

## ✨ Features

- 🔐 User authentication and authorization
- 🏠 Create and manage property listings
- ✏️ Edit and delete listings
- 🖼️ Property image support
- 📍 Location information for listings
- ⭐ Reviews and ratings
- 🛡️ Server-side validation
- 🗄️ MongoDB database integration
- 📱 Responsive web interface

## 🛠️ Tech Stack

### Frontend
- EJS
- HTML
- CSS
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Tools & Technologies
- JavaScript
- RESTful routing
- Authentication & authorization
- Express middleware

## 📁 Project Structure

```text
WanderLust/
│
├── classroom/
├── init/
├── models/
├── public/
├── routes/
├── utils/
├── views/
├── app.js
├── middleware.js
├── schema.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bhoomibindal/WanderLust.git
```

2. Navigate to the project:

```bash
cd WanderLust
```

3. Install dependencies:

```bash
npm install
```

4. Start the application:

```bash
node app.js
```

5. Open the application in your browser at:

```text
http://localhost:8080
```

## 🔑 Environment Variables

If your local configuration requires environment variables, create a `.env` file in the project root.

Example:

```env
MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

> Never commit your `.env` file or expose database credentials, API keys, or other secrets publicly.

## 📸 Screenshots

Screenshots of the application's main pages will be added here.

## 🌱 Future Improvements

- Advanced search and filtering
- Map-based property discovery
- Improved image management
- User profile pages
- Booking functionality
- Improved responsive design
- Deployment with a production database

## 👩‍💻 Author

**Bhoomi Bindal**

- GitHub: https://github.com/bhoomibindal
- LinkedIn: http://www.linkedin.com/in/bhoomi-bindal-90b029144

---

⭐ If you find this project useful, consider giving it a star!