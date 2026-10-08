import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import syaifulImage from '../assets/DSC_4012.JPG';

const teamMembers = [
  {
    name: 'Syaiful Ilham',
    role: 'Team Lead',
    bio: 'Memimpin tim dengan fokus pada roadmap produk dan pengalaman pengguna.',
    image: syaifulImage,
    skills: ['Product', 'Strategy', 'UX'],
  },
  {
    name: 'Syaiful Ilham',
    role: 'UI Designer',
    bio: 'Merancang interface yang bersih, modern, dan mudah dipahami pengguna.',
    image:
     syaifulImage,
    skills: ['Figma', 'Branding', 'Design'],
  },
  {
    name: 'Syaiful Ilham',
    role: 'Frontend Developer',
    bio: 'Membangun antarmuka responsif dan interaksi yang nyaman di berbagai perangkat.',
    image:
      syaifulImage,
    skills: ['React', 'Bootstrap', 'JavaScript'],
  },
  {
    name: 'Syaiful Ilham',
    role: 'Content Strategist',
    bio: 'Mengubah pesan brand menjadi konten yang relevan dan menarik untuk audiens.',
    image:
      syaifulImage,
    skills: ['Copywriting', 'SEO', 'Research'],
  },
];

function TeamPage() {
  return (
    <Container className="page-shell py-5">
      <div className="section-heading text-center mb-5">
        <p className="eyebrow">Our team</p>
        <h2 className="fw-bold">Tim yang bekerja dengan fokus dan semangat</h2>
        <p className="text-muted mx-auto section-copy">
          Kami adalah tim kreatif yang menggabungkan ide, desain, dan teknologi untuk membangun produk yang bermanfaat.
        </p>
      </div>

      <Row xs={1} md={2} lg={4} className="g-4">
        {teamMembers.map((member) => (
          <Col key={member.name}>
            <Card className="team-card h-100 border-0 shadow-sm">
              <Card.Img variant="top" src={member.image} alt={member.name} className="team-card__image" />
              <Card.Body className="p-4">
                <span className="team-role">{member.role}</span>
                <Card.Title className="mt-2 mb-2 fw-bold">{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.bio}</Card.Text>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {member.skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TeamPage;