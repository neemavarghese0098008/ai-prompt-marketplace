import PromptForm from "@/components/PromptForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Edit({ params }: Props) {

  const { id } = await params;

  const baseURL = "http://192.168.1.2:3000";

  const res = await fetch(
    `${baseURL}/api/prompts/${id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  console.log(data);

  const prompt = data.getAPrompts;

  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-10">
      <PromptForm mode="Edit" prompt={prompt} />
    </div>
  );
}