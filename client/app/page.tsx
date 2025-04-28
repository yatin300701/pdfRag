import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[30vw] p-8">
        <div className="rounded overflow-hidden shadow-lg">
          <div className="font-bold text-xl mb-2">Upload your documents</div>
          <div className="text-sm  mb-2">in PDF.</div>
          <button>Upload</button>
        </div>
      </div>
      <div className="flex flex-1 border-l-2 p-8"> he</div>
    </div>
  );
}
