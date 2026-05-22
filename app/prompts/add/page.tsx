import Image from "next/image";
import PromptForm from "@/components/PromptForm";
export default function Add() {
  return (
    <div className="min-h-screen bg-blue-100 py-10 px-100">
      <PromptForm mode="Create" />
    </div>
  );
}

