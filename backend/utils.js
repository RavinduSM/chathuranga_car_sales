import jwt from 'jsonwebtoken';

export const generateToken = (user) =>{
    return jwt.sign({
        _id: user._id, 
        name: user.name, 
        email: user.email, 
        telephone: user.telephone,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || 'secret', //benefit of having alternative is u wont get errors not havin JWT in env folder
    {
        expiresIn: '30d',
    }
    ); // as this is a very secret file we use.env
};
