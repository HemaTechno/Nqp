// supabaseClient.js
import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = "https://YOUR_PROJECT_ID.supabase.co"
const supabaseKey = "YOUR_ANON_KEY"

// إنشاء عميل Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)
