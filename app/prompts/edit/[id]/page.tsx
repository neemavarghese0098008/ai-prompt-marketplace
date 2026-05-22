import PromptForm from "@/components/PromptForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Edit({ params }: Props) {

  const { id } = await params;

  const baseURL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

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