import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>soniraju13344@gmail.com</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Social Links</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rajusoni7463?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/raju-kumar-31b0b927a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Raju Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

