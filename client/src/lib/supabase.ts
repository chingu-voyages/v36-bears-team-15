import { createClient } from '@supabase/supabase-js';

// export default createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_API_KEY,
// );

export default createClient(
  "https://qhftwryucecxnmsysrvf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNzk4MzIzLCJleHAiOjE5NTgzNzQzMjN9.cdKl7AhRXmvqT5DhKJ8J3sXBKtfKCFJOrmO_4wM8hnA",
);


// SUPABASE_API_KEY=
// SUPABASE_URL=
