# Blog Page

This project is a blog application built using React, TypeScript, and Tailwind CSS for the frontend, and Django for the backend. The application allows users to create, read, update, and delete articles, providing a platform for sharing knowledge and educating others about technology.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built with Django and includes the following components:

- **manage.py**: Command-line utility for interacting with the Django project.
- **blog/**: Contains the main settings and configuration for the Django project.
- **articles/**: Contains the models, views, serializers, and admin configurations for managing articles.

### Frontend

The frontend is built with React and TypeScript, utilizing Tailwind CSS for styling. It includes:

- **components/**: Reusable components such as ArticleCard, Navbar, and Footer.
- **pages/**: Different pages of the application, including Home and ArticleDetail.
- **App.tsx**: The main application component that sets up routing.
- **styles/**: Tailwind CSS styles for the application.

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm
- Django
- React
- TypeScript

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd blog-page
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install the required Python packages:
     ```
     pip install -r requirements.txt
     ```
   - Run database migrations:
     ```
     python manage.py migrate
     ```
   - Start the Django server:
     ```
     python manage.py runserver
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install the required npm packages:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

## Usage

- Access the blog at `http://localhost:3000` for the frontend.
- The backend API can be accessed at `http://localhost:8000/api/` (or the appropriate endpoint based on your Django settings).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.