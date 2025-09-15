import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Gallery() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      let { data, error } = await supabase.storage
        .from("uploads")
        .list("public", { limit: 50 });

      if (error) console.error(error);
      else setFiles(data);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {files.map((file) => (
          <img
            key={file.name}
            src={`${supabase.storage.from("uploads").getPublicUrl(`public/${file.name}`).data.publicUrl}`}
            alt={file.name}
            width="200"
          />
        ))}
      </div>
    </div>
  );
}
