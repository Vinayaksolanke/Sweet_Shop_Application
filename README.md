sweet-shop-Applicaion/
│
├── public/
│
└── src/
    ├── components/
    │   ├── Navbar/
    │   │   ├── CustomerNavbar.jsx
    │   │   ├── AdminNavbar.jsx
    │   │   └── Navbar.css
    │   │
    │   ├── SweetCard/
    │   │   ├── SweetCard.jsx
    │   │   └── SweetCard.css
    │   │
    │   ├── Menues/
    │   │   ├── DeleteModal.jsx
    │   │   ├── PurchaseModal.jsx
    │   │   └── RestockModal.jsx
    │   │
    │   └── FormComponents/
    │       ├── InputField.jsx
    │       └── Button.jsx
    │
    ├── pages/
    │   ├── Auth/
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   │
    │   ├── Customer/
    │   │   ├── CustomerDashboard.jsx
    │   │   ├── Profile.jsx
    │   │   └── PurchaseHistory.jsx   (optional)
    │   │
    │   ├── Admin/
    │   │   ├── AdminDashboard.jsx
    │   │   ├── ManageSweets.jsx
    │   │   ├── AddSweet.jsx
    │   │   └── EditSweet.jsx
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   └── SweetContext.jsx   (optional)
    │
    ├── hooks/
    │   ├── useAuth.js
    │   ├── useFetch.js
    │   └── useDebounce.js
    │
    ├── services/
    │   ├── api.js             // axios instance
    │   ├── authService.js     // login/register
    │   ├── sweetService.js    // CRUD and purchase
    │   └── inventoryService.js
    │
    ├── utils/
    │   ├── ProtectedRoute.jsx
    │   └── AdminRoute.jsx
    │
    ├── App.jsx
    ├── main.jsx
    ├── App.css
    └── index.css
