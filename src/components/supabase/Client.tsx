// Followed tutorial: https://mobisoftinfotech.com/resources/blog/app-development/supabase-react-typescript-tutorial
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_KEY as string;

export const Client = createClient(supabaseUrl, supabasePublishableKey);
