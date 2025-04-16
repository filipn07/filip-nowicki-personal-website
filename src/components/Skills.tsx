
const Skills = () => {
  const skillCategories = [
    {
      title: "Marketing",
      skills: [
        "Content Marketing",
        "Online Marketing",
        "Marketing Strategy",
        "B2B Marketing",
        "Online Advertising",
        "Go-to-Market Strategy"
      ]
    },
    {
      title: "Business Development",
      skills: [
        "Subscription Businesses",
        "Product Development", 
        "Market Research",
        "SaaS Growth",
        "Market Entry Strategies",
        "Product Launch"
      ]
    },
    {
      title: "Leadership",
      skills: [
        "Start-Ups",
        "Sales Processes",
        "Leadership",
        "Growth Consulting",
        "Communication Skills",
        "Sales Strategies"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
