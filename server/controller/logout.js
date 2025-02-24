


const logout = (req, res) => {
    try {

        res.clearCookie("access_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });        
        
        res.status(200).json({ message: "Logged out successfully!" });

    } catch (error) {
        console.error("Error in logout:", error);
        res.status(500).json({ message: "Something went wrong. Please try again." });
    }
};

module.exports = logout