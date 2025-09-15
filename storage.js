// Import dari CDN (kalau plain HTML) → pastikan sudah ada di index.html
// <script src="https://unpkg.com/@supabase/supabase-js"></script>

const supabaseUrl = "https://uuzhhkjzjdwbjhbhhpvk.supabase.co";   // ganti dari Settings → API
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1emhoa2p6amR3YmpoYmhocHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MzY0NTksImV4cCI6MjA3MzUxMjQ1OX0.lYWtAd7-Tw7he6Q3AvIOShC9e76TDsq_WhClbd-GrM4";   // ganti pakai anon public key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fungsi upload file
async function uploadFile(file) {
  const { data, error } = await supabase.storage
    .from('namabucket')       // ganti sesuai bucket di Supabase
    .upload('uploads/' + file.name, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error("Upload gagal:", error.message);
    return null;
  }

  // Ambil public URL biar bisa ditampilkan di galeri
  const { data: urlData } = supabase.storage
    .from('namabucket')
    .getPublicUrl('uploads/' + file.name);

  return urlData.publicUrl;
}

// Fungsi ambil semua file dari bucket
async function listFiles() {
  const { data, error } = await supabase.storage.from('namabucket').list('uploads/');
  if (error) {
    console.error("Gagal ambil list:", error.message);
    return [];
  }

  // Ubah jadi public URL biar bisa dipakai langsung di <img>
  return data.map(file =>
    supabase.storage.from('namabucket').getPublicUrl('uploads/' + file.name).data.publicUrl
  );
}

