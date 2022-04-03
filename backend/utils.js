import jwt from 'jsonwebtoken';

export const generateToken = (user) =>{
    return jwt.sign({
        _id: user._id, 
        name: user.name, 
        email: user.email, 
        telephone: user.telephone,
        isAdmin: user.isAdmin,
        isCustomer: user.isCustomer,
    }, process.env.JWT_SECRET || 'secret', 
    {
        expiresIn: '10d',
    }
    ); 
};

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(8, authorization.length); 
      jwt.verify(
        token,
        process.env.JWT_SECRET || 'secret',
        (err, decode) => {
          if (err) {
            res.status(401).send({ message: 'Invalid Token' });
          } else {
            req.user = decode;
            next();
          }
        }
      );
    } else {
      res.status(401).send({ message: 'No Token' });
    }
}

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
  };

export const isCustomer = (req, res, next) => {
    if (req.user && req.user.isCustomer) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Cutomer Token' });
    }
  };