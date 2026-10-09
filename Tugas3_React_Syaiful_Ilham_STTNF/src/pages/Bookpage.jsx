import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import MaterialGrid from '../components/MaterialGrid';
import FormField from '../elements/FormField';

const emptyForm = { title: '', author: '', year: '', description: '', image: '' };

function BookPage({ books, onAddBook }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ ...form, year: Number(form.year) });
    setForm(emptyForm);
    setShowForm(false);
  };

  return (
    <main>
      <Container className="page-shell pt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fw-bold mb-0">Daftar Buku</h1>
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Tutup' : '+ Tambah Buku'}
          </Button>
        </div>

        {showForm && (
          <Form onSubmit={handleSubmit} className="mt-4">
            <FormField id="title" name="title" label="Judul" value={form.title} onChange={handleChange} required />
            <FormField id="author" name="author" label="Penulis" value={form.author} onChange={handleChange} required />
            <FormField id="year" name="year" label="Tahun" type="number" value={form.year} onChange={handleChange} required />
            <FormField id="description" name="description" label="Deskripsi" as="textarea" rows={3} value={form.description} onChange={handleChange} required />
            <FormField id="image" name="image" label="URL Gambar (opsional)" value={form.image} onChange={handleChange} />
            <Button type="submit">Simpan</Button>
          </Form>
        )}
      </Container>
      <MaterialGrid books={books} />
    </main>
  );
}

export default BookPage;