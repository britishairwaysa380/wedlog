// ============================================================
//  Supabase config (safe to be public — anon key + URL only)
//  Row Level Security is what actually protects the data.
// ============================================================
const SUPABASE_URL = "https://ckafkvyfrnhddrkguinu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrYWZrdnlmcm5oZGRya2d1aW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MjI3MTYsImV4cCI6MjA5ODA5ODcxNn0.917yKFGkP85CartcvTKnKOWmyAJsR2wNgdcksowbWI8";

// Create the shared client (supabase-js is loaded via CDN in each page)
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
