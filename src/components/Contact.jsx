import './Contact.css';

const teamMembers = [
  {
    name: 'Dibyadarshi Maity',
    image: '/assets/dibyadar.jpg',
    email: 'maity@example.com',
    phone: '+91 12345 67890',
  },
  {
    name: 'Arunima Goswami',
    image: '/assets/Arunima.jpg',
    email: 'arunima@example.com',
    phone: '+91 23456 78901',
  },
 {
    name: 'Ipsita Lenka',
    image: '/assets/ipsita.jpg',
    email: 'Ipsita@example.com',
    phone: '+91 23456 78901',
  },
{
    name: 'Pratik Saha',
    image: '/assets/Pratik.jpg',
    email: 'Pratik@example.com',
    phone: '+91 23456 78901',
  },
    {
    name: 'Srijeeta Boral',
    image: '/assets/Srijeeta.jpg',
    email: 'Srijeeta@example.com',
    phone: '+91 23456 78901',
  },
    {
    name: 'Snigdha Chowdhury',
    image: '/assets/Snigdha.jpg',
    email: 'Snigdha@example.com',
    phone: '+91 23456 78901',
  },
    {
    name: 'Ankita Ghosh',
    image: '/assets/Ankita.jpg',
    email: 'Ankita@example.com',
    phone: '+91 23456 78901',
  }
];

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>Email: {member.email}</p>
            <p>Phone: {member.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
