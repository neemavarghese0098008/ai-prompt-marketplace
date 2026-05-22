'use client';

import { json } from "node:stream/consumers";
import { useState } from "react";
import { useRouter } from "next/navigation"
import Prompts from "@/app/prompts/page";

type Prompt={
    _id:string,
   title:string,
     description:string,
     promptText:string,
     category:string,
     tags:string[],
     author:string


}

interface PromptFormProps {
  mode?: 'Create' | 'Edit';
  prompt?:Prompt
}

const categories = [
  'ChatGPT',
  'Midjourney',
  'Claude',
  'Gemini',
  'Copilot',
  'Other',
];

export default function PromptForm({ mode = 'Create' ,prompt}: PromptFormProps) {
  const router = useRouter()


  const baseURL='http://localhost:3000'

  //state creation

  const [formData, setFormData] = useState<{

     title:string,
     description:string,
     promptText:string,
     category:string,
     tags:string[],
     author:string

  }>({
    title:prompt?.title || "",
    description:prompt?.description || "",
    promptText:prompt?.promptText || "",
    category:prompt?.category || "",
    tags:prompt?.tags || [],
    author: prompt?.author || "Ashik"
  })
  
  const handleAdd = async () => {
  try {

    const res = await fetch("/api/prompts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {

      router.push("/prompts");
      router.refresh();

    }

  } catch (error) {
    console.log(error);
  }
};
 const updatePrompt = async () => {

  if (!prompt?._id) return;

  try {
    const res = await fetch(`/api/prompts/${prompt._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log(data);
    if (data.success) {
      router.push("/prompts");
      router.refresh();
    }

  } catch (error) {
    console.log(error);
  }
};

  return (
    <section className="max-w-5xl  bg-white rounded-4xl shadow-xl border border-blue-100 p-8 md:p-12">
      <div className="flex justify-evenly">
        <div></div>
        <div>
          <div className="mb-8">
            <p className="text-xs tracking-[0.35em] uppercase text-blue-500 font-semibold mb-3">
              Add New Prompt
            </p>

            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              {mode === 'Create' ? 'Create prompt' : 'Edit prompt'}
            </h1>

            <p className="text-slate-600 leading-relaxed">
              Build a reusable AI prompt and tag it with a category so your
              teammates can find it easily.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Title
                </label>
                <input
                onChange={(e)=>setFormData({...formData,title:e.target.value})}
                value={formData.title}
                  type="text"
                  placeholder="Prompt title"
                  className="w-full h-14 px-5 rounded-full border border-blue-200 bg-[#f8fbff] focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                />
                <p className="text-sm text-slate-500 mt-2">
                  Use a short, descriptive title so prompts are easy to scan.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Category
                </label>
                <select
                 onChange={(e)=>setFormData({...formData,category:e.target.value})}
                value={formData.category}
                  className="w-full h-14 px-5 rounded-full border border-blue-200 bg-[#f8fbff] focus:outline-none focus:ring-2 focus:ring-blue-300"
                  
                >
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
                <p className="text-sm text-slate-500 mt-2">
                  Pick the tool or use case that best describes this prompt.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Description
              </label>
              <textarea
              onChange={(e)=>setFormData({...formData,description:e.target.value})}
              value={formData.description}
                rows={4}
                placeholder="Short summary of the prompt"
                className="w-full px-5 py-4 rounded-3xl border border-blue-200 bg-[#f8fbff] focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400 resize-none"
              />
              <p className="text-sm text-slate-500 mt-2">
                Describe what this prompt achieves and when to use it.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Prompt text
              </label>
              <textarea
              onChange={(e)=>setFormData({...formData,promptText:e.target.value})}
              value={formData.promptText}
                rows={8}
                placeholder="Write the prompt text here"
                className="w-full px-5 py-4 rounded-3xl border border-blue-200 bg-[#f8fbff] focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400 resize-none"
              />
              <p className="text-sm text-slate-500 mt-2">
                Paste the full AI prompt here, including any instructions or
                context.
              </p>

              <div className="mt-3 rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3 text-sm text-slate-600">
                Example: “Create a social media post for a SaaS launch with a
                friendly tone, three benefits, and a call to action.”
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Tags (comma separated)
                </label>
                <input
                onChange={(e)=>setFormData({...formData,tags:e.target.value.split(",")})}
                value={formData.tags.join(",")}
                  type="text"
                  placeholder="e.g. marketing, ai, productivity"
                  className="w-full h-14 px-5 rounded-full border border-blue-200 bg-[#f8fbff] focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                />
                <p className="text-sm text-slate-500 mt-2">
                  Add related keywords to improve search and filtering.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Author
                </label>
                <input
                onChange={(e)=>setFormData({...formData,author:e.target.value})}
                value={formData.author}
                  type="text"
                  placeholder="Prompt author"
                  className="w-full h-14 px-5 rounded-full border border-blue-200 bg-[#f8fbff] focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                />
                <p className="text-sm text-slate-500 mt-2">
                  Enter the creator name or team responsible for this prompt.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-2">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Publish your AI prompt
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Share the prompt with your collection so it can be searched and
                  edited later.
                </p>
              </div>

              {mode === 'Create' ?
              
               <button
               onClick={handleAdd}
                type="button"
                className="px-8 py-3 rounded-full bg-[#0f1f52] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >Create prompt</button>
              
             : <button
             onClick={updatePrompt}
                type="button"
                className="px-8 py-3 rounded-full bg-[#0f1f52] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >Update prompt</button>
            }

              
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
}