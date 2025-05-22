🎓 Courses System Demo

A full-stack demo project showcasing a basic Course Management System using:

🧩 Angular (Frontend)

🔧 .NET 6 Web API (Backend)

🗄️ Entity Framework Core (ORM)

✨ Features
📚 Browse, create, update, and delete courses

🔁 RESTful API structure with ASP.NET Core

📦 Entity Framework Core with migration support

🧪 Modular and clean architecture

🧰 Tech Stack
Layer	Tech Stack
Frontend	Angular, HTML, SCSS, TypeScript
Backend	ASP.NET Core 6, C#
Database	EF Core, SQL Server
Tools	Angular CLI, .NET CLI, EF CLI

🚀 Getting Started
🔧 Prerequisites
Make sure you have the following installed:

Node.js & npm

Angular CLI

.NET 6 SDK

SQL Server (or any other DB supported by EF Core)

📦 Installation
1. Backend

cd u22517473_HW01_API
dotnet ef database update     # Run DB migrations
dotnet run                    # Start API
Update your appsettings.json with your SQL connection string before running.

2. Frontend

cd u22517473_HW01_Angular
npm install                   # Install dependencies
ng serve                      # Start frontend
Access the app at http://localhost:4200

📁 Project Structure

Courses-System-Demo/
│
├── u22517473_HW01_API/        # .NET 6 Web API backend
└── u22517473_HW01_Angular/    # Angular frontend

🧪 Future Improvements
🔐 Add JWT-based authentication

🧪 Frontend and backend unit/integration tests

🎨 UI/UX improvements using Angular Material

🌐 Dockerize for containerized deployment

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

📄 License
Licensed under the MIT License.
