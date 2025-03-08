import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild>
            <a href="/Resume_Raju.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="bg-card rounded-lg p-8 border border-border/40">
          <h1 className="text-3xl font-bold mb-6">Raju Kumar</h1>
          <p className="text-muted-foreground mb-6">
            Full Stack Developer | React | Flutter | Nest.js
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
              Contact Information
            </h2>
            <p>Email: Soniraju13344@gmail.com</p>
            <p>Phone: +91 7463840415</p>
            <p>Location: Noida, Uttar Pradesh</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
              Summary
            </h2>
            <p>
              Passionate and detail-oriented Full Stack Developer with 1 years
              of experience in building responsive and user-friendly web
              applications. Specialized in React, Flutter, and Nest.js.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
              Experience
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium">Software Developer</h3>
              <p className="text-primary">
                TS Finserv Privated Limited | 2025 - Present
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>
                  Led the development of the company's flagship product using
                  Flutter and TypeScript{" "}
                </li>
                <li>
                  Implemented responsive designs and improved App performance by
                  40%
                </li>
                <li>
                  Collaborated with UX designers to create intuitive user
                  interfaces
                </li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium">React Developer</h3>
              <p className="text-primary">
                Sensation Software solutions | 2024 July - 2024 December
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>
                  Developed and maintained client websites using React, Node.js,
                  and mongoDB
                </li>
                <li>
                  Integrated e-commerce functionality using MongoDB, Stripe, and
                  third-party APIs."
                </li>
                <li>
                  Created custom UI components and optimized UX for
                  accessibility and performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
              Education
            </h2>
            <div>
              <h3 className="text-lg font-medium">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-primary">
                Punjab Technical University | 2021 - 2025
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React</li>
                  <li>Flutter</li>
                  <li>JavaScript, TypeScript</li>
                  <li>Tailwind CSS, Material UI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Node.js, Express</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                  <li>Firebase,Nest.js</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>ReactJS & Redux - NamasteDev.com </li>
              <li> Flutter - Udemy</li>
              <li>Google UX Design Professional Certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
