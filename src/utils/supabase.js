
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://dtpatbzxwqzmwhmrdinf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0cGF0Ynp4d3F6bXdobXJkaW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMTQ2NTQsImV4cCI6MjA0NzY5MDY1NH0.XesACcib0m8omZVFVUWSNhMJ8MytFkjsyo8JLLc24w4';


export const supabase = createClient(supabaseUrl, supabaseKey);
        
