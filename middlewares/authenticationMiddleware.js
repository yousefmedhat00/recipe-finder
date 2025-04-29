
function requireAuth(req, res, next) {
    
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized. No token provided.' });
    }
  
    next();
  }
  
  module.exports = { requireAuth };
  