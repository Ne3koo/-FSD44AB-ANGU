import mongoose, { Schema, Document } from 'mongoose';

export interface Article {
  id: string;
  imageUrl: string;
  title: string;
  summary: string;
  content: string;
  author: Author;
  keywords: string[];
}

const articleSchema = new Schema<Article & Document>({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  keywords: { type: [String] }
});

export const ArticleModel = mongoose.model<Article & Document>('Article', articleSchema);

interface Author {
  id: string;
  name: string;
  bio: string;
}

export default ArticleModel;
