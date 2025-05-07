"use client";
export default function Home() {
  const handleUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".pdf");
    let file: File | null = null;
    input.onchange = async () => {
      if (!input.files) return;
      file = input.files[0];

      const formData = new FormData();
      formData.append("file", file);
      await fetch("http://localhost:8000/upload/file", {
        method: "POST",
        body: formData,
      });
    };
    input.click();
  };
  return (
    <div className="flex min-h-screen">
      <div className="w-[30vw] p-8 tw-h-full flex items-start justify-center">
        <div
          className="rounded-2xl overflow-hidden shadow-lg p-4 cursor-pointer "
          onClick={handleUpload}
        >
          <div className="font-bold text-xl mb-2">Upload your documents</div>
          <div className="text-sm  mb-2 text-center">in PDF.</div>
          <div className="flex items-start justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-1 border-l-2 p-8"> he</div>
    </div>
  );
}
