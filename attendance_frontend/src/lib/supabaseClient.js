import { createClient } from '@supabase/supabase-js';

/**
 * PUBLIC_INTERFACE
 * getSupabaseClient
 * Returns a singleton Supabase client instance configured using environment variables.
 * 
 * Environment variables required (set via CRA):
 * - REACT_APP_SUPABASE_URL: Supabase project URL
 * - REACT_APP_SUPABASE_ANON_KEY: Supabase anon/public API key
 */
let supabase = null;

// PUBLIC_INTERFACE
export function getSupabaseClient() {
  /** Returns a configured Supabase client instance. */
  if (supabase) return supabase;

  const url = process.env.REACT_APP_SUPABASE_URL;
  const anonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Provide a clear runtime error to help configuration in dev/CI
    // Do not leak secrets; only note missing configuration.
    // eslint-disable-next-line no-console
    console.warn(
      'Supabase client not fully configured. Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in your .env.'
    );
  }

  supabase = createClient(url || '', anonKey || '');
  return supabase;
}
