# **User Management Application**

A modern **User Management Application** built with **Next.js**, **NextAuth.js**, and **Tailwind CSS**. This application provides features like user authentication, tenant management, role-based access control, and more.
## **Features**

- **User Authentication**
  - Register with email verification.
  - Login with email and password.
  - Social login (Google, Facebook).
  - Logout functionality.
- **Tenant Management**
  - Create, edit, and delete tenants.
  - Assign users to tenants.
- **Role-Based Access Control (RBAC)**
  - Define roles (admin, manager, user).
  - Restrict access based on roles.
- **Forgot Password**
  - Request a password reset link via email.
- **Reset Password**
  - Securely reset password using a token.
- **Modern UI/UX**
  - Built with **Tailwind CSS** for a responsive and clean design.

---

## **Technologies Used**

- **Frontend**: Next.js, Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: SQLite (or any database of your choice)
- **Backend**: Next.js API routes
- **Deployment**: Netlify

---

## **Getting Started**

Follow these steps to set up and run the project locally.

### **Prerequisites**

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXTAUTH_SECRET=your-secret-key
   DATABASE_URL=sqlite:./db.sqlite
   EMAIL_SERVER_USER=your-email@gmail.com
   EMAIL_SERVER_PASSWORD=your-email-password
   ```

4. **Initialize the Database**
   Run the following command to initialize the database:
   ```bash
   node scripts/initDb.js
   ```

5. **Run the Application**
   Start the development server:
   ```bash
   npm run dev
   ```

6. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Deployment**

### **Deploy to Netlify**

1. **Push Your Project to GitHub**
   Ensure your project is pushed to a GitHub repository.

2. **Connect Repository to Netlify**
   - Log in to [Netlify](https://www.netlify.com).
   - Click **Add new site** > **Import an existing project**.
   - Connect your GitHub account and select the repository.

3. **Configure Build Settings**
   - Set the **Build command** to `npm run build`.
   - Set the **Publish directory** to `.next`.

4. **Add Environment Variables**
   - Go to **Site settings** > **Build & deploy** > **Environment variables**.
   - Add the required variables:
     ```
     NEXTAUTH_SECRET=your-secret-key
     DATABASE_URL=sqlite:./db.sqlite
     EMAIL_SERVER_USER=your-email@gmail.com
     EMAIL_SERVER_PASSWORD=your-email-password
     ```

5. **Deploy**
   - Click **Deploy site**.
   - Netlify will build and deploy your application.

6. **Access Your Application**
   Once the deployment is complete, Netlify will provide you with a live URL (e.g., `https://user-management-app.netlify.app`).

---

## **Project Structure**

```
user-management-app/
  ├── components/       # Reusable components
  ├── lib/              # Utility functions and database connection
  ├── pages/            # Next.js pages and API routes
  ├── scripts/          # Database initialization scripts
  ├── styles/           # Global styles and Tailwind CSS
  ├── .env.local        # Environment variables
  ├── .gitignore        # Git ignore file
  ├── next.config.js    # Next.js configuration
  ├── package.json      # Project dependencies
  ├── README.md         # Project documentation
  └── tailwind.config.js # Tailwind CSS configuration
```

---

## **Contributing**

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

## **Contact**

For questions or feedback, feel free to reach out:

- **Your Name**
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

