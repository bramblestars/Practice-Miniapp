import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cleaiojocybgxbxhrzqx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZWFpb2pvY3liZ3hieGhyenF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNDI1MjUsImV4cCI6MjAxNjgxODUyNX0.BKnOlOS283NiNAWjwTlD9CUGJpixu6BUTpjl2qSLgvc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;