 //check  to see if user is logged in
const authReq = (req, res, next) => {
    // if not logged in bring to login page
    if (!req.session.logged_in) {
      return res.redirect("/login");
    }
    
    next();
  };
  
  module.exports = authReq;