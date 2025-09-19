// Temporary Admin Access
// Browser console mein ye code run karo:

localStorage.setItem('user', JSON.stringify({
  name: "Admin User",
  email: "admin@test.com", 
  role: "system-admin",
  address: "Admin Office",
  idToken: "temp-token"
}));

// Phir page refresh karo
window.location.reload();