// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://ispfygqkirifkhlrwpor.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzcGZ5Z3FraXJpZmtobHJ3cG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NjAyOTYsImV4cCI6MjA0ODUzNjI5Nn0.i3dNhLndA89yBfla4wjNTM5oacWBpwMvCTetrxhRRDc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);