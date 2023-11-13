import axios from "axios"
import config from '../config/config.js'

export const verifyUser = async (req, res, next) => {
    try {
        const user = await axios.get(`http://${config.user_url}:${config.user_port}/user/checklogin`, {
          headers: {
            authorization: req.headers.authorization,
          }
        })
        if (!user) return res.status(401).json({ success: false, message: "Not authorize to access this route" });
        req.user = user.data.data.user
        next()
    } catch(err) {
        console.log(err.stack);
        return res.status(401).json({ success: false, message: "Not authorize to access this route" });
    }
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   }
//   if (!token || token === "null") {
//     return res
//       .status(401)
//       .json({ success: false, message: "Not authorize to access this route" });
//   }
//   try {
//     // const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     // console.log(decoded);
//     // req.user = await User.findById(decoded.id);
//     next();
//   } catch (err) {
//     console.log(err.stack);
//     return res
//       .status(401)
//       .json({ success: false, message: "Not authorize to access this route" });
//   }
};

export const authorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role ${req.user.role} is not authorized to access this route`,
      });
    }
    next();
  };
};
