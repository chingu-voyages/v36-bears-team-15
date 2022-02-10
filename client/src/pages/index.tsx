/* istanbul ignore file */
import Main from 'components/Main';
import supabase from '../lib/supabase';
import * as S from './styles';
import { Auth, Typography, Button } from '@supabase/ui';
import { createClient } from '@supabase/supabase-js';
import { Router, useRouter } from 'next/router';
import { route } from 'next/dist/server/router';

const connection = createClient("https://qhftwryucecxnmsysrvf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNzk4MzIzLCJleHAiOjE5NTgzNzQzMjN9.cdKl7AhRXmvqT5DhKJ8J3sXBKtfKCFJOrmO_4wM8hnA")


// export default function Home({ users, error }) {
//   const { user } = Auth.useUser()
//   if (user)
//     return (
//       <>
//         <Main />
//       </>
//     );
//   return props
// }

// export async function getStaticProps() {
//   const { data: users, error } = await supabase.from('User').select('*');

//   if (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       users,
//       error,
//     },
//   };
// }

const Container = (props) => {
  const router = useRouter();
  const { user } = Auth.useUser()
  if (user)
    return (
        <>
          <Typography.Text>Signed in: {user.email}</Typography.Text>
          <Button block onClick={() => {props.supabaseClient.auth.signOut(); router.reload()}}>
            Sign out
          </Button>
          <Main/>
        </>
      )
  return props.children
}

export default function AuthBasic() {
  const { user } = Auth.useUser()

  if(!user) {
    return (
      <Auth.UserContextProvider supabaseClient={connection}>
        <Container supabaseClient={supabase}>
          <Auth supabaseClient={supabase} magicLink={true} providers={[, 'google', 'facebook', 'github']} socialLayout={'horizontal'} redirectTo={'http://localhost:3000/main'} socialColors={true} />
        </Container>
      </Auth.UserContextProvider>
    )
  } else {
    return (
      <Main />
    )
  }
}

