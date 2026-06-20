import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  patientName: { type: String, required: true },
  patientId: { type: String, required: true },
  patientNotes: { type: String, default: "" },
  prediction: { type: Number, required: true },
  result: { type: String, required: true },
  confidence: { type: Number, required: true },
  features: { type: [Number], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Result || mongoose.model("Result", ResultSchema);
