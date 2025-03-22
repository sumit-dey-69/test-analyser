type DownloadButtonProps = {
    filename: string;
    content: string;
  };
  
  export default function DownloadButton({ filename, content }: DownloadButtonProps) {
    const handleDownload = () => {
      const blob = new Blob([content], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
  
    return (
      <button
        className="bg-white/80 hover:bg-white/70 text-black hover:text-white transition-all font-semibold px-4 py-2 rounded cursor-pointer"
        onClick={handleDownload}
      >
        Download
      </button>
    );
  }
  