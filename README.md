# CineBuzz

CineBuzz is a full-stack movie ticket booking application built with React, Node.js, Express, MongoDB, and Clerk authentication. Users can browse movies, select show timings, choose seats, book tickets, manage favorites, and pay securely via Stripe. Admins can manage shows and view bookings.

---

## Features

- **User Authentication:** Secure login/signup with Clerk.
- **Browse Movies:** View now playing movies and details.
- **Book Tickets:** Select show timings, seats, and proceed to checkout.
- **Stripe Payments:** Pay for bookings securely.
- **Favorites:** Add/remove favorite movies (persisted for logged-in users).
- **My Bookings:** View and pay for pending bookings.
- **Admin Dashboard:** Manage shows and bookings.
- **Automated Workflows:** Inngest handles background jobs (e.g., releasing seats if payment is not made).

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, Clerk
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Payments:** Stripe
- **Auth:** Clerk
- **Background Jobs:** Inngest

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance
- Stripe account (for payments)
- Clerk account (for authentication)
- TMDB API key (for movie data)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cinebuzz.git
   cd cinebuzz
   ```

2. **Backend Setup:**
   ```bash
   cd server
   npm install
   ```
   - Create a `.env` file with:
     ```
     MONGO_URI=your_mongodb_uri
     STRIPE_SECRET_KEY=your_stripe_secret_key
     CLERK_SECRET_KEY=your_clerk_secret_key
     TMDB_API_KEY=your_tmdb_api_key
     ```

   - Start the backend:
     ```bash
     npm start
     ```

3. **Frontend Setup:**
   ```bash
   cd ../client
   npm install
   ```
   - Create a `.env` file with:
     ```
     VITE_BASE_URL=http://localhost:3000
     VITE_CURRENCY=USD
     VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
     ```

   - Start the frontend:
     ```bash
     npm run dev
     ```

4. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:3000](http://localhost:3000)

---

## Usage

- **User:** Sign in, browse movies, book tickets, manage favorites, view bookings.
- **Admin:** Access `/admin` dashboard to manage shows and bookings.

---

## Folder Structure

```
cinebuzz/
  client/    # React frontend
  server/    # Node.js/Express backend
```


## License

MIT

---

## Acknowledgements

- [TMDB](https://www.themoviedb.org/) for movie data
- [Clerk](https://clerk.com/) for authentication
- [Stripe](https://stripe.com/) for payments
-