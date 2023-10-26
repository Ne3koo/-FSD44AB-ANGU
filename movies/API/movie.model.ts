// movie.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IMovie extends Document {
  id: number;
  title: string;
  director: string;
  year: number;
  duration: number;
}

const movieSchema: Schema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
  duration: { type: Number, required: true },
});

export default mongoose.model<IMovie>('Movie', movieSchema);
