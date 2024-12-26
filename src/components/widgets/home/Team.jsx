export default function Team() {
  const team = [
    { name: "John Doe", role: "CEO", image: "/images/home/team-john.png" },
    {
      name: "Jane Smith",
      role: "Manager",
      image: "/images/home/team-jane.png",
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      image: "/images/home/team-alice.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
