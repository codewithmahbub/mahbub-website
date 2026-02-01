import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    // Construct the WhatsApp message
    let whatsappMessage = "";
    
    if (name) whatsappMessage += `Name: ${name}\n`;
    if (email) whatsappMessage += `Email: ${email}\n`;
    if (subject) whatsappMessage += `Subject: ${subject}\n`;
    if (message) whatsappMessage += `\nMessage:\n${message}`;
    
    // If no message content, use a default message
    if (!whatsappMessage.trim()) {
      whatsappMessage = "Hello, I'd like to get in touch with you.";
    }
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/8801798141085?text=${encodedMessage}`, '_blank');
    
    // Clear the form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my expertise 
            in full-stack development and DevOps can help achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <a href="mailto:mahabubalam2690@gmail.com" className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Email</h4>
                    <p className="text-muted-foreground">mahabubalam2690@gmail.com</p>
                  </div>
                </a>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <a href="tel:+8801798141085" className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Phone</h4>
                    <p className="text-muted-foreground">+8801798141085</p>
                  </div>
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Location</h4>
                    <p className="text-muted-foreground">Available for Remote Work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Input 
                placeholder="Subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button 
                className="w-full gap-2"
                onClick={handleSendWhatsApp}
              >
                <Send className="h-4 w-4" />
                Send Message via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}