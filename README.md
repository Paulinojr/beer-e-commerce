# Installation instructions
This project is configured in it's root folder, you don't need to navigate to the `frontend` and `backend` folder in order to run it. After cloning the repo, just execute
`npm run install:all`

After the modules are installed correctly, execute the following:
`npm run dev`

And it's done! Both frontend and backend are running.

# About the project
I bootstraped the frontend project using Vite, the folder structure for this project is as follows:
beer-e-commerce-frontend/  
├── 📁 public/               # Static assets (e.g., images, icons)  
├── 📁 src/                  # Source code  
│   ├── 📁 components/       # Reusable UI components  
│   ├── 📁 context/          # React Context providers  
│   ├── 📁 hooks/            # Custom React hooks  
│   ├── 📁 pages/            # Page components  
│   ├── 📁 styles/           # Global styles or SCSS files  
│   ├── 📁 utils/            # Utility functions  
│   ├── 📄 App.jsx           # Main application component  
│   └── 📄 main.jsx          # Entry point for the application  

I used Context API for state management and SCSS for styling (no library was needed). I used vite config to proxy all requests to the local backend.

For the backend, I started a simple Node.js project and used express to define the GET routes.
