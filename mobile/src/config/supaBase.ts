import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabase = createClient("https://jtnhihatjzbiyenlkppg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bmhpaGF0anpiaXllbmxrcHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NDkzMDEsImV4cCI6MjAzNDMyNTMwMX0.CI0H8-C9sIotzOOXD-leWWs4fgP_1BFaOo9ulmoxc90", {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      }
})
