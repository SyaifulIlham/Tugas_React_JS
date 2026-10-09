import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import FormField from '../elements/FormField';

function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="auth-page py-5">
      <Container>
        <section className="auth-card mx-auto">
          <p className="eyebrow">Selamat datang kembali</p>
          <h1 className="h2 fw-bold">Masuk</h1>
          <p className="text-muted">Masuk ke akun Worthbook Anda.</p>
          {submitted && (
            <Alert variant="info" role="status">
              Form berhasil divalidasi. Fitur login perlu dihubungkan ke backend autentikasi.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <FormField id="login-email" label="Email" type="email" placeholder="nama@email.com" autoComplete="email" required />
            <FormField id="login-password" label="Password" type="password" placeholder="Masukkan password" autoComplete="current-password" minLength={8} required />
            <Button type="submit" className="w-100 mt-2">Masuk</Button>
          </Form>
          <p className="mt-4 mb-0 text-center text-muted">
            Belum punya akun? <Link to="/register">Daftar sekarang</Link>
          </p>
        </section>
      </Container>
    </main>
  );
}

export default LoginPage;
