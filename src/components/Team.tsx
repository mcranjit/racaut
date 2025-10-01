import React, { useState } from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Team: React.FC = () => {
  const [viewMore, setViewMore] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const executiveBoard = [
    {
      name: "Dr. Mani Prahaspathy",
      position: "Faculty Advisor",
      image: "https://i.ibb.co/DHqznhxy/Mani-Sir.jpg",
      bio: "Faculty Advisor for the Rotaract Club of Anna University, Trichy, Dr. Mani Prahaspathy is a seasoned academic and mentor with extensive experience in guiding students toward holistic growth. With expertise in Information Technology, Organizational Leadership, and Community Service, Dr. Prahaspathy is committed to fostering leadership, innovation, and a spirit of service among students.",
      email: "#",
      linkedin: "#",
    },
    {
      name: "Saiganesh S",
      position: "President",
      image: "https://i.ibb.co/G3HgJtqV/sai.jpg",
      bio: "As the President of the Rotaract Club of Anna University, Trichy, Saiganesh S is a dynamic leader and a final-year Electronics & Communication Engineering student. With a strong passion for community service, he has spearheaded numerous initiatives fostering innovation, collaboration, and societal impact while emphasizing leadership development among peers.",
      email: "president@rotaractau.org",
      linkedin: "#",
    },
    {
      name: "Alexander F",
      position: "Secretary",
      image: "https://i.ibb.co/vCbmRdNF/1168d0d3-5f7c-4e8f-bdae-8625664afa32.jpg",
      bio: "Alexander F, a final-year Electrical and Electronics Engineering student at Anna University, Trichy, is the Secretary of the Rotaract Club. Known for his meticulous documentation and exceptional communication skills, he ensures seamless coordination and effective record-keeping, playing a pivotal role in the club's operations and success.",
      email: "secretary@rotaractau.org",
      linkedin: "#",
    },
    {
      name: "Ranjith M C",
      position: "Treasurer",
      image: "https://i.ibb.co/TD7WSCkZ/Ranjith-Photo.jpg",
      bio: "Ranjith M C, a final-year Information Technology student at Anna University, Trichy, serves as the Treasurer of the Rotaract Club. With exceptional financial management skills and a commitment to transparency, he efficiently oversees the club's finances. Passionate about community service, Ranjith actively contributes to impactful projects that uplift and empower local communities.",
      email: "cmr2401ranjith@gmail.com",
      linkedin: "#",
    },
    {
      name: "Infant Jerome I",
      position: "Club Trainer",
      image: "https://i.ibb.co/CsPbWYZN/jerome.jpg",
      bio: "Infant Jerome I, a final-year Electronics & Communication Engineering student, serves as the Club Trainer for the Rotaract Club of Anna University, Trichy. Renowned for his ability to inspire and mentor, he is dedicated to equipping members with essential skills in leadership, teamwork, and personal development, fostering a culture of continuous learning and excellence.",
      email: "trainer@rotaractau.org",
      linkedin: "#",
    },
    {
      name: "Anbalagan",
      position: "Vice President",
      image: "https://i.ibb.co/PGj0RPzt/anbalagan.jpg",
      bio: "Anbalagan, the Vice President of the Rotaract Club of Anna University, Trichy, is a dynamic leader known for his strategic vision and commitment to service. Dedicated to fostering collaboration and driving impactful initiatives, he plays a key role in guiding the club’s activities, empowering members, and promoting a culture of unity, innovation, and excellence.",
      email: "vp@rotaractau.org",
      linkedin: "#",
    },
  ];

  const moreMembers = [
      { image: "https://i.ibb.co/MxFGrKg2/2.png" },
      { image: "https://i.ibb.co/0R5DyG0W/3.png" },
      { image: "https://i.ibb.co/DfbkNCDB/Green-and-White-Birthday-Greetings-Instagram-Post.jpg" },
      { image: "https://i.ibb.co/jPKZmKg6/5.png" },
      { image: "https://i.ibb.co/M5t7nZzG/6.png" },
      { image: "https://i.ibb.co/7NjghH6S/7.png" },
      { image: "https://i.ibb.co/Lz74bfKw/8.png" },
      { image: "https://i.ibb.co/B7w6vYR/16.png" },
      { image: "https://i.ibb.co/DHvGFZ6m/17.png" },
      { image: "https://i.ibb.co/qv36Zx5/20.png" },
      { image: "https://i.ibb.co/SD7wwHfD/21.png" },
      { image: "https://i.ibb.co/LDK9MxTf/19.png" },
      { image: "https://i.ibb.co/vCjsqHyN/18.png" },
      { image: "https://i.ibb.co/Pv9WKzdd/1e91754e-5f94-4aae-982e-3f432154307e.jpg" },
      { image: "https://i.ibb.co/sp0tSY6T/14.png" },
      { image: "https://i.ibb.co/PsRn5RcZ/12.png" },
      { image: "https://i.ibb.co/KxGmCNC4/11.png" },
      { image: "https://i.ibb.co/1J96BWmm/13.png" },
      { image: "https://i.ibb.co/HfYCZKH0/10.png" },
      { image: "https://i.ibb.co/gFmLhhkn/22.png" },
      { image: "https://i.ibb.co/ksp2hRrB/37255e51-1d6c-4b92-82e2-93482f69d168.jpg" },
      { image: "https://i.ibb.co/sdy5H9B3/1.png" },
      { image: "https://i.ibb.co/FLLXfRk0/23.png" },
    ];

  const pastLeaders = [
    { year: "2013–14", president: "Rtr. Arun Cumar", secretary: "Rtr. Raj Kumar" },
    { year: "2014–15", president: "Rtr. Raj Kumar", secretary: "Rtr. Iyaapan" },
    { year: "2015–16", president: "Rtr. Suganthan", secretary: "Rtr. Prakash" },
    { year: "2016–17", president: "Rtr. Silambarasan", secretary: "Rtr. Nithin G. Laksman" },
    { year: "2017–18", president: "Rtr. V. Kethareswaran", secretary: "Rtr. Syed Imthiyas" },
    { year: "2018–19", president: "Rtr. J. Jerish Obed", secretary: "Rtr. V. Vignesh" },
    { year: "2019–20", president: "Rtr. R. Navamadhan", secretary: "Rtr. S. Balaji" },
    { year: "2020–21", president: "Rtr. S. Balaji", secretary: "Rtr. P. Anne Mary Peterson, Rtr. Moulidharan" },
    { year: "2021–22", president: "Rtr. A.N. Deshma", secretary: "Rtr. I. Krithika" },
    { year: "2022–23", president: "Rtr. Vasanthan U", secretary: "Rtr. Tony James J" },
    { year: "2023–24", president: "Rtr. Tony James J", secretary: "Rtr. Karthick Raj K" },
    { year: "2024–25", president: "Rtr. Infant Jerome I", secretary: "Rtr. Sacchin S.P., Rtr. Shahul M." },
    { year: "2025–26", president: "Rtr. Saiganesh S", secretary: "Rtr. Alexander F" },
  ];

  // ✅ Executive member card (with details)
  const renderMemberCard = (member: any, index: number) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover mx-auto mt-6"
        />
        <div className="mt-4">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-blue-600 font-medium">{member.position}</p>
        </div>
      </div>

      <div className="p-6">
        {viewMore === index ? (
          <>
            <p className="text-gray-600 mb-4 leading-relaxed text-center">{member.bio}</p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex space-x-3">
                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Mail size={20} />
                </a>
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
              <button
                onClick={() => setViewMore(null)}
                className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-200"
              >
                View Less
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-4 leading-relaxed text-center">
              {member.bio.substring(0, 100)}...
            </p>
            <button
              onClick={() => setViewMore(index)}
              className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-200"
            >
              View More
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated executive board members leading the way in service, fellowship, and leadership.
          </p>
        </div>

        {/* Executive Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveBoard.map((member, index) => renderMemberCard(member, index))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-200"
            >
              View More
            </button>
          </div>
        )}

        {/* More Members + Past Leaders */}
        {showAll && (
          <div className="mt-16">
            {/* ✅ Posters Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {moreMembers.map((poster, index) => (
                <img
                  key={index}
                  src={poster.image}
                  alt={`Poster ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ))}
            </div>

            {/* Past Leaders Table */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-4">Past Leaders</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-3 border">Year</th>
                      <th className="p-3 border">President</th>
                      <th className="p-3 border">Secretary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastLeaders.map((row, i) => (
                      <tr key={i}>
                        <td className="p-3 border">{row.year}</td>
                        <td className="p-3 border">{row.president}</td>
                        <td className="p-3 border">{row.secretary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* View Less Button */}
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(false)}
                className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-200"
              >
                View Less
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
