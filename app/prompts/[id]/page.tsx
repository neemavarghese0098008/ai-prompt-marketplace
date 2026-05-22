import Link from "next/link";

import { connectionDB } from "@/lib/db";
import Prompt from "@/models/prompt";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function View({ params }: Props) {

  const { id } = await params;

  // connect mongodb
  await connectionDB();

  // get prompt directly
  const prompt = await Prompt.findById(id);

  if (!prompt) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Prompt not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex justify-center items-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-3xl p-10 border border-gray-200">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2">
            View Prompt
          </h1>

          <p className="text-gray-500">
            Complete details of the selected AI prompt
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Prompt Title
          </label>

          <div className="w-full border border-gray-300 rounded-xl p-4 bg-gray-50 text-gray-800">
            {prompt.title}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Description
          </label>

          <div className="w-full border border-gray-300 rounded-xl p-4 bg-gray-50 text-gray-800">
            {prompt.description}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Category
          </label>

          <div className="w-full border border-gray-300 rounded-xl p-4 bg-gray-50 text-gray-800">
            {prompt.category}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Prompt Text
          </label>

          <div className="w-full border border-gray-300 rounded-xl p-4 bg-gray-50 text-gray-800 min-h-[180px] whitespace-pre-wrap">
            {prompt.promptText}
          </div>
        </div>

        <div className="flex gap-4">

          <Link
            href={`/prompts/edit/${prompt._id}`}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Edit Prompt
          </Link>

          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 transition-all duration-300 text-gray-800 px-6 py-3 rounded-xl font-semibold"
          >
            Back
          </Link>

        </div>

      </div>

    </div>
  );
}