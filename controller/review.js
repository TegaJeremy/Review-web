const reviewModel = require('../model/userModel')

const sendReview = async (req, res) => {
    try {
        const { review, rating } = req.body;
        
        // // Check if a review from the same user already exists
        // const existingReview = await reviewModel.findOne({ /* your user identification criteria */ });

        // if (existingReview) {
        //     return res.status(400).json({ message: 'User already submitted a review' });
        // }
         // Check if request body is empty
         if (!review || !rating) {
            return res.status(400).json({ message: 'Review and rating are required' });
        }

        const user = new reviewModel({
             review,
           rating: rating || 10, });
        await user.save();
        res.status(200).json({ message: 'Review sent successfully', data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateReview = async(req,res)=>{
    try {
        const userId = req.params.userId; // Assuming 'userId' is the parameter name
        const user = await reviewModel.findOne({ _id: userId });
    
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    
        const { review, rating } = req.body;
    
        if (!review || !rating) {
            return res.status(400).json({ message: 'Review and rating are required' });
        }
    
        const updateData = {
            review: review || user.review,
            rating: rating || user.rating
        };
    
        const updatedUser = await reviewModel.findOneAndUpdate({ _id: userId }, updateData, { new: true });
    
        res.status(200).json({ message: 'Updated successfully', data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


module.exports={
    sendReview,
    updateReview
}