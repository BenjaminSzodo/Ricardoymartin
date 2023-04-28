const users = require('../utils/users')

const login = (req,res)=>{
    const {email,password} = req.query;
    const userFound = users.find((user)=>user.email === email &&
    user.password === password)
    
    return userFound ? res.status(200).json({access: true}) : res.status(200).json({access: false})
    
}

module.exports = { login };

// users.forEach(user => {
//     if (user.email === email && user.password === password) {
//          return res.status(200).json({access: true})
//     }else{
//         return res.status(200).json({access: false})
//     }
// }