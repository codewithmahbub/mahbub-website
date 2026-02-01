import { Card, CardContent } from "./ui/card";
import resumePhoto from "figma:asset/22453cf963b3d889789e6d10cd8c70330018b050.png";

export function Resume() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 print:p-8" id="resume-content">
      {/* Header with Photo - Top Left */}
      <div className="mb-8">
        <div className="flex gap-6 items-start mb-6">
          {/* Photo - Top Left Corner */}
          <div className="flex-shrink-0">
            <img 
              src={resumePhoto} 
              alt="Mahbub Alam"
              className="w-24 h-24 object-cover rounded-lg border-3 border-blue-600 shadow-md"
            />
          </div>
          
          {/* Header Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">MAHBUB ALAM</h1>
            <p className="text-xl font-semibold text-blue-600 mb-3">Backend & Frontend Developer</p>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="border-t-2 border-b-2 border-blue-600 py-4">
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="font-semibold">📱 Phone:</span>
              <span>01798141085</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">✉️ Email:</span>
              <span>mahabubalam2690@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">📍 Location:</span>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">🔗 GitHub:</span>
              <a href="https://github.com/codewithmahbub" className="text-blue-600 hover:underline">
                codewithmahbub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">💼 LinkedIn:</span>
              <a href="https://www.linkedin.com/in/mahbub-alam2006/" className="text-blue-600 hover:underline">
                mahbub-alam2006
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">🩸 Blood:</span>
              <span>A+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify text-sm">
          Dedicated and passionate Full Stack Developer with 2 years of hands-on experience in designing, 
          developing, and deploying scalable web applications. Proficient in modern JavaScript ecosystem including 
          React, Next.js, and Node.js, with strong expertise in backend development and DevOps practices. 
          Demonstrated ability to deliver high-quality solutions while maintaining excellent client satisfaction. 
          Currently pursuing Diploma in Mechanical Technology while actively contributing to various web development projects.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          TECHNICAL SKILLS
        </h2>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <h3 className="font-bold text-blue-600 mb-1 text-sm">Programming Languages</h3>
              <p className="text-gray-700 text-sm">JavaScript, TypeScript, SQL, PHP, HCL</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 mb-1 text-sm">Frontend Technologies</h3>
              <p className="text-gray-700 text-sm">React.js, Next.js, Tailwind CSS</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 mb-1 text-sm">Backend Technologies</h3>
              <p className="text-gray-700 text-sm">Node.js, Express.js, Fastify</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 mb-1 text-sm">DevOps & Cloud</h3>
              <p className="text-gray-700 text-sm">Docker, Kubernetes, Jenkins, Terraform</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 mb-1 text-sm">BaaS Platforms</h3>
              <p className="text-gray-700 text-sm">Firebase, AppWrite, Supabase</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 mb-1 text-sm">Testing & Tools</h3>
              <p className="text-gray-700 text-sm">Jest, Git, GitHub, RESTful APIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="space-y-3">
          <div className="border-l-2 border-blue-300 pl-4">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <div>
                <h3 className="font-bold text-base text-gray-900">Full Stack Developer</h3>
                <p className="text-blue-600 font-semibold text-sm">Freelance</p>
              </div>
              <p className="text-gray-600 font-semibold text-sm">2023 - Present</p>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Successfully developed and deployed 15+ production-ready web applications using React, Next.js, and Node.js</li>
              <li>Designed and implemented RESTful APIs with robust authentication and authorization mechanisms</li>
              <li>Integrated multiple third-party services and payment gateways to enhance application functionality</li>
              <li>Implemented containerization using Docker and established CI/CD pipelines for automated deployments</li>
              <li>Collaborated directly with clients to gather requirements and deliver custom solutions</li>
              <li>Maintained 100% client satisfaction rate through effective communication and timely delivery</li>
              <li>Optimized application performance resulting in improved load times and user experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          KEY PROJECTS
        </h2>
        <div className="space-y-3">
          <div className="border-l-2 border-blue-300 pl-4">
            <h3 className="font-bold text-gray-900 text-sm">Full-Featured E-Commerce Platform</h3>
            <p className="text-xs text-blue-600 mb-1">React, Node.js, Express, MongoDB, Stripe Integration</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Built comprehensive product management system with advanced search and filtering capabilities</li>
              <li>Implemented secure shopping cart functionality and integrated Stripe payment gateway</li>
              <li>Developed admin dashboard for inventory management and order tracking</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-blue-300 pl-4">
            <h3 className="font-bold text-gray-900 text-sm">Real-Time Task Management Application</h3>
            <p className="text-xs text-blue-600 mb-1">Next.js, Firebase, Real-time Database</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Created collaborative task management tool with real-time synchronization</li>
              <li>Implemented user authentication, role-based access control, and team collaboration features</li>
              <li>Designed intuitive UI/UX with drag-and-drop functionality</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-blue-300 pl-4">
            <h3 className="font-bold text-gray-900 text-sm">RESTful API Development & Integration</h3>
            <p className="text-xs text-blue-600 mb-1">Node.js, Express, PostgreSQL, JWT Authentication</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Designed and developed scalable RESTful APIs for multiple client projects</li>
              <li>Implemented JWT-based authentication, input validation, and database optimization</li>
              <li>Created comprehensive API documentation for seamless integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PAGE BREAK */}
      <div className="page-break"></div>

      {/* Education */}
      <section className="mb-6 mt-8">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          EDUCATION
        </h2>
        <div className="space-y-3">
          <div className="border-l-2 border-blue-300 pl-4">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-bold text-base text-gray-900">Diploma in Mechanical Technology</h3>
                <p className="text-blue-600 text-sm">Dhaka Polytechnic Institute</p>
                <p className="text-gray-600 text-sm">Currently in 3rd Semester</p>
              </div>
              <p className="text-gray-600 font-semibold text-sm">Expected: 2027</p>
            </div>
          </div>
          
          <div className="border-l-2 border-blue-300 pl-4">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-bold text-base text-gray-900">Secondary School Certificate (SSC)</h3>
                <p className="text-blue-600 text-sm">Shamsul Haque Khan School and College</p>
                <p className="text-gray-600 text-sm">Science Group | Dhaka Board</p>
              </div>
              <p className="text-gray-600 font-semibold text-sm">2023 | GPA: 5.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Training (Optional - can add if you have any) */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          ACHIEVEMENTS & HIGHLIGHTS
        </h2>
        <div className="bg-gray-50 p-3 rounded-lg">
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Achieved 100% client satisfaction rate across 15+ completed projects</li>
            <li>Successfully delivered projects with zero critical bugs in production</li>
            <li>Earned GPA 5.00 in Secondary School Certificate (SSC) examination</li>
            <li>Active contributor to open-source projects on GitHub</li>
            <li>Proficient in both frontend and backend development with modern tech stacks</li>
          </ul>
        </div>
      </section>

      {/* Personal Information */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          PERSONAL INFORMATION
        </h2>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div><span className="font-semibold text-gray-900">Father's Name:</span> <span className="text-gray-700">Md. Ahidul Islam</span></div>
            <div><span className="font-semibold text-gray-900">Mother's Name:</span> <span className="text-gray-700">Samsun Nahar</span></div>
            <div><span className="font-semibold text-gray-900">Date of Birth:</span> <span className="text-gray-700">2006</span></div>
            <div><span className="font-semibold text-gray-900">Blood Group:</span> <span className="text-gray-700">A+</span></div>
            <div><span className="font-semibold text-gray-900">National ID:</span> <span className="text-gray-700">4218712679</span></div>
            <div><span className="font-semibold text-gray-900">Nationality:</span> <span className="text-gray-700">Bangladeshi</span></div>
            <div><span className="font-semibold text-gray-900">Religion:</span> <span className="text-gray-700">Islam</span></div>
            <div><span className="font-semibold text-gray-900">Marital Status:</span> <span className="text-gray-700">Single</span></div>
            <div className="md:col-span-2">
              <span className="font-semibold text-gray-900">Present Address:</span> 
              <span className="text-gray-700"> Mujahid Nagar, Old Passport Office, Rayer Bag, Dhaka-1362</span>
            </div>
            <div className="md:col-span-2">
              <span className="font-semibold text-gray-900">Permanent Address:</span> 
              <span className="text-gray-700"> Gazaria, Munshiganj, Rasulpur</span>
            </div>
            <div><span className="font-semibold text-gray-900">Alternative Phone:</span> <span className="text-gray-700">01614000827</span></div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 border-l-4 border-blue-600 pl-3">
          REFERENCES
        </h2>
        <p className="text-gray-700 text-sm italic">Available upon request</p>
      </section>

      {/* Declaration */}
      <section className="mt-8 pt-4 border-t-2 border-gray-300">
        <p className="text-gray-700 text-sm mb-4">
          <span className="font-semibold">Declaration:</span> I hereby declare that all the information provided above is true and correct to the best of my knowledge.
        </p>
        <div className="flex justify-between items-end mt-8">
          <div>
            <p className="text-gray-700 text-sm font-semibold">Date: {new Date().toLocaleDateString('en-GB')}</p>
          </div>
          <div className="text-right">
            <div className="border-t-2 border-gray-800 pt-1 mt-8" style={{ minWidth: '200px' }}>
              <p className="text-gray-700 text-sm font-semibold">Mahbub Alam</p>
              <p className="text-gray-600 text-xs">Signature</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}