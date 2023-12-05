import { createClient } from '@supabase/supabase-js';

// Replace 'your_supabase_url' and 'your_supabase_key' with your actual Supabase URL and API key
const supabaseUrl = 'https://qsuugivqyvpjsdadtboz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdXVnaXZxeXZwanNkYWR0Ym96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0Njc4MzksImV4cCI6MjAxNTA0MzgzOX0.9YdLYS7TlyKtHrCUbH8oj9AfAnAk_QSZrXGMelWaXvE';

const supabase = createClient(supabaseUrl, supabaseKey);


import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import { GoogleButton } from './_GoogleButton';
import { TwitterButton } from './_TwitterButton';

export function LoginRegister(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" shadow="sm" withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome to Karbee, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(async () => {
          try {
            if (type === 'register') {
              //Registration
              console.log("starting register")
              let { data, error } = await supabase.auth.signUp({
                email: form.values.email,
                password: form.values.password,
                // options: {
                //   emailRedirectTo: 'https://example.com/welcome'
                // }
                // options: {
                //   data: {full_name: form.values.name} 
                // }
              });
              if (error) {
                //handle registration error 
                console.error('Error signing up:', error.message);
              } else {
                //handle successful registration redirect or show message
                console.log('User signed up successfully:', data);
              }
            } else {
              console.log("starting login")
              let {data, error } = await supabase.auth.signInWithPassword({
                email: form.values.email,
                password: form.values.password
              });

              if (error) {
                // Handle login error
                console.error('Error signing in:', error.message);
              } else {
                // Handle successful login, e.g., redirect or show a success message
                console.log('User signed in successfully:', data);
              }
            }  
          } catch (error) {
            console.error('An unexpected error occurred submitting the form');
          }
        })}>
          <Stack>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginRegister;