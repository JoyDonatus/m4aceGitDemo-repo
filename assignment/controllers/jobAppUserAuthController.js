import User from '../models/user.js';

export const registerUser = async (req, res) => {
    const { firstName, email, password, role } = req.body;
    try{
        const existingUser = await User.findOne({email});

        if (existingUser){
            res.status(400).json({status: 400, msg: 'User already exist'})
        }
        else{

            const user = await User.create({
            firstName,
            email,
            password,
            role
        })}
        const token = user.createJWT();
        res.status(201).json({status: 201, data: { id: user._id, name: user.name, role: user.role }, msg: 'user created succesfully!', token})
    } catch(err){
        res.status(500).json({status: 500, data: null, msg: 'Server error!'})
    }
}



export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, msg: 'Please provide email and password' });
    }

    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, msg: 'Invalid credentials' });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, msg: 'Invalid credentials' });
    }

    const token = user.createJWT();

    res.status(200).json({
      success: true,
      msg: 'Login successful!',
      token,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};