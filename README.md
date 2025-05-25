# Personal Portfolio Website

A portfolio website built with Next.js 15 featuring an admin panel for content management and optimized performance through ISR and SSG.

## Features

- **Admin Panel**: Secure authentication with project management capabilities
- **Project Management**: Create, update, and delete portfolio projects with image uploads
- **Performance Optimized**: ISR and SSG for fast loading times
- **Image Upload**: Integrated with UploadThing for file management
- **Real-time Updates**: Content changes reflect immediately

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- MongoDB
- UploadThing

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB database
- UploadThing account

### Installation

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd personal-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env.local` file
   ```env
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_jwt_secret_key
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   ```

4. Set up the database and create admin user
   ```bash
   create records in your MongoDB database manually.
   ```

5. Start development server
   ```bash
   npm run dev
   ```

## Project Structure

```
├── app/
│   ├── (root)/                 # Public routes
│   ├── (auth)/                 # Authentication
│   ├── admin/                  # Admin panel
│   └── components/             # UI components
├── lib/
│   ├── actions/                # Server actions
│   ├── dal.ts                  # Data access layer
│   └── session.ts              # Session management
└── public/                     # Static files
```

## Admin Usage

Access the admin panel at `/admin` to manage projects, upload images, and update content.

## Deployment

Deploy to Vercel and configure the environment variables listed above.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for seamless deployment
- **UploadThing** for file upload solution
- **Tailwind CSS** for utility-first styling

---

**Built with ❤️ by ***Ankit*****
