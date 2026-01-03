import mongoose from "mongoose";

const connectDb = async () => {
    try {
        mongoose.connection.on('error', (err) => {
            console.log('MongoDB connection error:', err);
        });

        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('MongoDB connected successfully');
        
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
        console.error('Server will continue running without database connection');
    }
}

export default connectDb;



 