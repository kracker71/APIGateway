import {client} from '../grpc/grpc.js'
export const GetTables = async (req, res, next) => {
  try {
    client.GetTables(null,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const BookSeat = async (req, res, next) => {
  try {
    console.log(req.user.id)
    console.log(req.body)
    const payload = {
      userId : String(req.user.id), 
      tableId : req.body.tableId,
    }
    
    client.BookSeat(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const CancelSeat = async (req, res, next) => {
  const payload = {
    userId : String(req.user.id), 
    tableId : req.body.tableId,
  }
  try {
    client.CancelSeat(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const CheckIn = async (req, res, next) => {
  const payload = {
    userId : String(req.user.id), 
    tableId : req.body.tableId,
  }
  try {
    client.CheckIn(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const VerifyCheckIn = async (req, res, next) => {
  const payload = {
    requestId : req.body.requestId
  }
  try {
    client.VerifyCheckIn(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const CheckOut = async (req, res, next) => {
  const payload = {
    tableId : req.body.tableId
  }
  try {
    client.CheckOut(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const DeleteLateTables = async (req, res, next) => {
  try {
    client.DeleteLateTables(null,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

// //@desc   Login user
// //@route  POST /api/v1/auth/login
// //@access Public
// exports.login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ success: false, msg: "Please provide an email and password" });
//     }
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         msg: "Invalid credentials",
//       });
//     }
//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         msg: "Invalid credentials",
//       });
//     }
//     sendTokenResponse(user, 200, res);
//   } catch (err) {
//     return res.status(401).json({
//       success: false,
//       msg: "Cannot convert email or password to string",
//     });
//   }
// };

// const sendTokenResponse = (user, statusCode, res) => {
//   const token = user.getSignedJwtToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };
//   if (process.env.NODE_ENV === "production") {
//     options.secure = true;
//   }
//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     token,
//   });
// };

// //@desc   Get current Logged in user
// //@route  POST /api/v1/auth/me
// //@access Private
// exports.getMe = async (req, res, next) => {
//   const user = await User.findById(req.user.id);
//   res.status(200).json({
//     success: true,
//     data: user,
//   });
// };

// //@desc   Log user out / clear cookie
// //@route  GET /api/v1/auth/logout
// //@access Private
// exports.logout = async (req, res, next) => {
//   res.cookie("token", "none", {
//     expires: new Date(Date.now() + 10 * 1000),
//     httpOnly: true,
//   });
//   res.status(200).json({
//     success: true,
//     data: {},
//   });
// };
