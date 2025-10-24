import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});
const isProduction = process.env.NODE_ENV === "production";

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: isProduction ? "none" : "lax", // CSRF attacks cross-site request forgery attacks
		secure: isProduction,
	});
};

export default generateTokenAndSetCookie;
