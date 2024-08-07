const UserSchema = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = 'your_secret_key';

module.exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send('Email and Password are required');
        }

        const existingUser = await UserSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserSchema({ email, password: hashedPassword });

        await newUser.save();
        res.status(200).send('Registration successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send('Email and Password are required');
        }

        const user = await UserSchema.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid email or password');
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
}
