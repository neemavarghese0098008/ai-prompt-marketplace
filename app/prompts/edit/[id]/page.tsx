import PromptForm from "@/components/PromptForm";

import { connectionDB } from "@/lib/db";
import Prompt from "@/models/prompt";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Edit({ params }: Props) {

  const { id } = await params;

  // connect mongodb
  await connectionDB();

  // get prompt
  const promptData = await Prompt.findById(id);

  // convert to plain object
  const prompt = JSON.parse(JSON.stringify(promptData));

  // if prompt not found
  if (!prompt) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl font-bold">
        Prompt not found
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-10">
      <PromptForm mode="Edit" prompt={prompt} />
    </div>
  );
}