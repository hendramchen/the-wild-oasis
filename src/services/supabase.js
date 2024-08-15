import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gnsjdmkhepsfpmvzffjk.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imduc2pkbWtoZXBzZnBtdnpmZmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3Mzg1MTYsImV4cCI6MjAzMzMxNDUxNn0.K7LmQaEom-MOPK662TTWs_6xBlMZbID6EoCAwakRVdM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
