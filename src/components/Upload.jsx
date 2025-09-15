import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Pilih file dulu!");

    const { data, error } = await supabase.storage
      .from("uploads") // nama bucket Supabase kamu
      .upload(`public/${Date.now()}-${file.name}`, file);

    if (error) {
      console.error(error);
      alert("Upload gagal!");
    } else {
      alert("Upload berhasil!");
    }
  };

  return (
    <div>
      <h2>Upload Foto / Video</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
