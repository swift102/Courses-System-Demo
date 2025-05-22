# 🎓 Courses System Demo

A full-stack demo project showcasing a basic Course Management System using Angular and ASP.NET Core.

---

## 🚀 Features

* 📚 Browse, create, update, and delete courses
* 🔁 RESTful API structure using ASP.NET Core
* 🗄️ Entity Framework Core with migration support
* 🧰 Clean and modular architecture (frontend & backend)

---

## 📦 Tech Stack

| Layer    | Tech Stack                         |
| -------- | ---------------------------------- |
| Frontend | Angular, HTML, SCSS, TypeScript    |
| Backend  | ASP.NET Core 6, C#                 |
| Database | EF Core, SQL Server                |
| Tools    | Angular CLI, .NET CLI, EF Core CLI |

---

## 🛠️ Getting Started

### 🔧 Prerequisites

* Node.js & npm
* Angular CLI
* .NET 6 SDK
* SQL Server (or compatible DB for EF Core)

### 📦 Installation

#### 1. Backend Setup

```bash
cd u22517473_HW01_API
# Update your SQL connection string in appsettings.json
dotnet ef database update   # Apply migrations
dotnet run                  # Start the API
```

#### 2. Frontend Setup

```bash
cd u22517473_HW01_Angular
npm install                # Install dependencies
ng serve                   # Launch Angular app
```

Access at: [http://localhost:4200](http://localhost:4200)

---

## 📁 Project Structure

```
Courses-System-Demo/
├── u22517473_HW01_API/        # .NET 6 Web API backend
└── u22517473_HW01_Angular/    # Angular frontend
```

---

## 🧪 Future Improvements

* 🔐 Implement JWT-based user authentication
* 🧪 Add unit and integration tests
* 🎨 UI enhancements using Angular Material
* 🐳 Dockerize backend/frontend for deployment

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue to discuss first.

---

## 📄 License

Licensed under the MIT License.
