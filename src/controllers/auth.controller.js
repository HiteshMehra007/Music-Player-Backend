export const singupController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username);
        console.log(email);
        console.log(password);
        return res.status(200).json({
            message: "User Created Succesfully",
        })
    } catch (error) {
        console.log("Something went wrong in signup Controller", error);
        throw new Error(error);
    }
}

