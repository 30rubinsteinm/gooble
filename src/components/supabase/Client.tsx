import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_KEY as string;

export const Client = supabasePublishableKey ? createClient(supabaseUrl, supabasePublishableKey) : null;