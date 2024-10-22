// Test controller function to check server is running or not
export const testController = async (req, res) => {
  return res.status(200).json({ success: true, message: "Server is running successfully" });
};