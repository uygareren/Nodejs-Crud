const Auth = require('../models/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.postRegister = async (req, res, next) => {
  try {
        const { username, email, password } = req.body;

        const existingUser = await Auth.findOne({ where: { email: email } });

        if (existingUser) {
        return res.status(409).json({ message: 'Kullanıcı zaten var.' });
        }

        if(password.length < 6){
            res.status(400).json({message: 'Parola 6 karakterden az olamaz!'})
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await Auth.create({ username, email, password: hashedPassword });
        const userToken = jwt.sign({id: newUser.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'});


        return res.status(200).json({
            status: 'OK',
            newUser,
            message: 'Kullanıcı başarıyla kaydedildi.',
            userToken
        });
    }catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Sunucu hatası.' });
  }
};



exports.postLogin = async (req,res,next) => {
    try{
        const {email, password} = req.body;

        const user = await Auth.findOne({where : {email: email}})
    
        if(!user){
            res.status(400).json({message: 'Bu email"e sahip bir kullanıcı yoktur!'})
        }
    
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword){
            res.status(400).json({message: 'Bu parolaya sahip bir kullanıcı yoktur!'})
        }
        const userToken = jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'});

        res.status(200).json({
            status: 'OK',
            user,
            userToken
        })

    }catch(error){
        console.log(res.status(500).json({message: error.message}));
    }
}

