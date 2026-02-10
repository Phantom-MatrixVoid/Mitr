// supabase.js
console.log("supabase.js loaded");

const { createClient } = window.supabase;

const SUPABASE_URL = "https://btjdrxwrvbprowibdrfs.supabase.co";
const SUPABASE_KEY = "sb_publishable_WyzuXFv514tkw9X5sLfN6w_ZrhS-1Eq";

window.db = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("Supabase client ready", window.db);
