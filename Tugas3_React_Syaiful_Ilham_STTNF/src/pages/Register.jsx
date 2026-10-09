import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import FormField from '../elements/FormField';

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const password = form.elements.namedItem('password');
    const confirmation = form.elements.namedItem('confirmPassword');

    confirmation.setCustomValidity(
      password.value === confirmation.value ? '' : 'Konfirmasi password tidak cocok.',
    );
    if (!form.reportValidity()) return;

    setSubmitted(true);
  }

  return (
    <main className="auth-page py-5">
      <Container>
        <section className="auth-card mx-auto">
          <p className="eyebrow">Bergabung dengan Worthbook</p>
          <h1 className="h2 fw-bold">Buat akun</h1>
          <p className="text-muted">Buat akun untuk menyimpan dan menemukan cerita favorit Anda.</p>
          {submitted && (
            <Alert variant="info" role="status">
              Form berhasil divalidasi. Pendaftaran akun perlu dihubungkan ke backend.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <FormField id="register-name" label="Nama lengkap" placeholder="Nama Anda" autoComplete="name" required />
            <FormField id="register-email" label="Email" type="email" placeholder="nama@email.com" autoComplete="email" required />
            <FormField id="register-password" name="password" label="Password" type="password" placeholder="Minimal 8 karakter" autoComplete="new-password" minLength={8} required />
            <FormField
              id="register-confirm-password"
              name="confirmPassword"
              label="Konfirmasi password"
              type="password"
              placeholder="Ulangi password"
              autoComplete="new-password"
              minLength={8}
              onChange={(event) => event.currentTarget.setCustomValidity('')}
              required
            />
            <Button type="submit" className="w-100 mt-2">Daftar</Button>
          </Form>
          <p className="mt-4 mb-0 text-center text-muted">
            Sudah punya akun? <Link to="/login">Login</Link>
          </p>
        </section>
      </Container>
    </main>
  );
}

export default RegisterPage;
