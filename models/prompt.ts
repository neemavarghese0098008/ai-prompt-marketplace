import mongoose, { Schema, model, models } from 'mongoose';

// TypeScript interface describing the shape of a prompt document.
export interface IPrompt {
  title: string;
  description: string;
  promptText: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: Date;
  favorite: boolean;
}

const PromptSchema = new Schema<IPrompt>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    promptText: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    author: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    favorite: { type: Boolean, default: false },
  },
  { timestamps: false }
);

// In development, Next.js may reload the file multiple times. Reuse the model if it already exists.
const Prompt = models.Prompt || model<IPrompt>('Prompt', PromptSchema);
export default Prompt;