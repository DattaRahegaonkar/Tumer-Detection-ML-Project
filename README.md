# Tumor Detection Project

A full-stack machine learning application for tumor detection built with Flask (backend) and Next.js (frontend).

## Project Structure

```
tumor_detection_project/
├── backend/           # Flask API server
│   ├── app.py        # Main Flask application
│   ├── tumor_model.pkl  # Trained ML model
│   └── requirements.txt
├── frontend/         # Next.js frontend
│   ├── app/          # Next.js app router
│   ├── package.json
│   └── public/
└── README.md
```

## Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- npm or yarn

---

## Backend Setup & Commands

### 1. Navigate to Backend Directory

```bash
cd backend
```

### 2. Create Virtual Environment (Optional but Recommended)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Backend Server

```bash
python app.py
```

The backend server will start at `http://localhost:5000`

---

## Frontend Setup & Commands

### 1. Navigate to Frontend Directory

```bash
cd frontend
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The frontend will start at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

---

## Dependencies

### Backend Packages

| Package | Description |
|---------|-------------|
| `flask` | Lightweight WSGI web application framework |
| `flask-cors` | CORS support for Flask |
| `joblib` | Save/load Python objects (scikit-learn models) |
| `numpy` | Numerical computing library |
| `scikit-learn` | Machine learning library |

### Frontend Packages

| Package | Description |
|---------|-------------|
| `react` ^19.1.0 | UI library |
| `react-dom` ^19.1.0 | React DOM rendering |
| `next` ^15.5.4 | React framework |

### Frontend Dev Dependencies

| Package | Description |
|---------|-------------|
| `tailwindcss` ^4 | CSS framework |
| `eslint` ^9 | Code linting |
| `eslint-config-next` 15.5.4 | ESLint configuration for Next.js |

---

## Quick Start Commands Summary

```bash
# Backend
cd backend
pip install -r requirements.txt
python app.py

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

---

## Docker Deployment

### 1. MongoDB Container

```
docker run -d --name mongodb -p 27017:27017 --network ml-network -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```

### 2. Backend Container

```
docker build -t ml-backend ./backend

docker run -d --name ml-backend -p 5000:5000 --network ml-network ml-backend
```

### 3. Frontend Container

```
docker build -t ml-frontend ./frontend

docker run -d --name ml-frontend -p 3000:3000 --network ml-network ml-frontend
```

---

## License

MIT License
