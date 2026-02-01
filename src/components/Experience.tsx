import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Machine Learning & AI - Self Learning",
      company: "Independent Study",
      location: "India",
      period: "2024 - 2025",
      description: "Pursued self-directed learning in machine learning and artificial intelligence. Built projects involving predictive analytics and natural language processing. Explored deep learning architectures using TensorFlow and PyTorch through online courses and hands-on projects.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow"]
    },
    {
      title: "Backend and Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Present",
      description: "Lead full-stack development projects using React, Node.js, and TypeScript. Implemented CI/CD pipelines with Jenkins and managed containerized applications with Docker and Kubernetes.",
      technologies: ["React", "Node.js", "TypeScript", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      title: "Full Stack Developer",
      company: "Code with Harry",
      location: "India",
      period: "2023 - 2024",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with DevOps team to implement automated deployment processes and infrastructure as code with Terraform.",
      technologies: ["JavaScript", "Express.js", "Firebase", "Terraform", "Git"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            2 years of dedicated experience in full-stack development, continuously expanding 
            expertise in building modern web applications and DevOps practices.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}