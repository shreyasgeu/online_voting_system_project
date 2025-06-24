import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  voterId: {
    type: String,
    required: true,
    unique: true, 
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',  
    required: true,
  },
  votedAt: {
    type: Date,
    default: Date.now,
  },
});

const Vote = mongoose.model('Vote', voteSchema);
export default Vote;
