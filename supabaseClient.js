import { createClient } from '@supabase/supabase-js'

// Ganti dengan URL & anon key dari Supabase dashboard
const supabaseUrl = "https://uuzhhkjzjdwbjhbhhpvk.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1emhoa2p6amR3YmpoYmhocHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MzY0NTksImV4cCI6MjA3MzUxMjQ1OX0.lYWtAd7-Tw7he6Q3AvIOShC9e76TDsq_WhClbd-GrM4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
