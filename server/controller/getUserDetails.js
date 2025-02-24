const getuserDetailsFromToken = require("../helper/extractToken");


const getuserDetails = async (req, res) => {

    console.log("Im in userdetails");
    
    try {
        const token = req.cookies.access_token || "";

        console.log('token', token);
        
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const user = await getuserDetailsFromToken(token);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user });

    } catch (err) {
        console.error("Error in getuserDetails:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = getuserDetails
