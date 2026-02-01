import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from "lucide-react";
import profileImage from "figma:asset/a4d5e0e121eacc4d3fdfd9a5721d657f5ecccec0.png";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Resume } from "./Resume";

export function Hero() {
  const [showResume, setShowResume] = useState(false);

  const handleDownloadResume = () => {
    // Open resume in a new window for printing/downloading
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Mahbub Alam - Resume</title>
            <meta charset="UTF-8">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 20px;
                background: white;
                color: #1f2937;
                line-height: 1.6;
              }
              img {
                max-width: 100%;
                height: auto;
              }
              h1 { 
                font-size: 2.5rem; 
                margin-bottom: 0.25rem;
                color: #111827;
                font-weight: 700;
              }
              h2 { 
                font-size: 1.25rem; 
                color: #1f2937; 
                border-left: 4px solid #2563eb; 
                padding-left: 12px;
                margin-top: 1rem;
                margin-bottom: 0.75rem;
                font-weight: 700;
              }
              h3 { 
                font-size: 1rem; 
                margin-bottom: 0.25rem;
                color: #111827;
                font-weight: 600;
              }
              p { margin: 0.5rem 0; }
              ul { margin: 0.5rem 0; padding-left: 1.25rem; }
              li { margin: 0.25rem 0; color: #374151; }
              a {
                color: #2563eb;
                text-decoration: none;
              }
              .photo {
                width: 96px;
                height: 96px;
                border-radius: 8px;
                border: 3px solid #2563eb;
                object-fit: cover;
                flex-shrink: 0;
              }
              section {
                margin-bottom: 1.5rem;
              }
              .page-break {
                page-break-before: always;
                break-before: page;
                height: 0;
                margin: 0;
                padding: 0;
                border: none;
              }
              .bg-gray-50 {
                background: #f9fafb;
              }
              .border-blue-600 {
                border-color: #2563eb;
              }
              .border-blue-300 {
                border-color: #93c5fd;
              }
              .text-blue-600 {
                color: #2563eb;
              }
              .text-gray-900 {
                color: #111827;
              }
              .text-gray-700 {
                color: #374151;
              }
              .text-gray-600 {
                color: #4b5563;
              }
              .border-t-2 {
                border-top-width: 2px;
                border-top-style: solid;
              }
              .border-b-2 {
                border-bottom-width: 2px;
                border-bottom-style: solid;
              }
              .border-l-2 {
                border-left-width: 2px;
                border-left-style: solid;
              }
              .border-l-4 {
                border-left-width: 4px;
                border-left-style: solid;
              }
              .rounded-lg {
                border-radius: 8px;
              }
              .p-3 {
                padding: 0.75rem;
              }
              .p-4 {
                padding: 1rem;
              }
              .pl-3 {
                padding-left: 0.75rem;
              }
              .pl-4 {
                padding-left: 1rem;
              }
              .py-4 {
                padding-top: 1rem;
                padding-bottom: 1rem;
              }
              .mb-1 {
                margin-bottom: 0.25rem;
              }
              .mb-2 {
                margin-bottom: 0.5rem;
              }
              .mb-3 {
                margin-bottom: 0.75rem;
              }
              .mb-4 {
                margin-bottom: 1rem;
              }
              .mb-6 {
                margin-bottom: 1.5rem;
              }
              .mb-8 {
                margin-bottom: 2rem;
              }
              .mt-8 {
                margin-top: 2rem;
              }
              .pt-1 {
                padding-top: 0.25rem;
              }
              .pt-4 {
                padding-top: 1rem;
              }
              .gap-2 {
                gap: 0.5rem;
              }
              .gap-3 {
                gap: 0.75rem;
              }
              .gap-6 {
                gap: 1.5rem;
              }
              .gap-x-6 {
                column-gap: 1.5rem;
              }
              .gap-y-2 {
                row-gap: 0.5rem;
              }
              .flex {
                display: flex;
              }
              .flex-1 {
                flex: 1;
              }
              .flex-shrink-0 {
                flex-shrink: 0;
              }
              .items-start {
                align-items: flex-start;
              }
              .items-center {
                align-items: center;
              }
              .items-end {
                align-items: flex-end;
              }
              .justify-between {
                justify-content: space-between;
              }
              .flex-wrap {
                flex-wrap: wrap;
              }
              .grid {
                display: grid;
              }
              .grid-cols-3 {
                grid-template-columns: repeat(3, 1fr);
              }
              .grid-cols-2 {
                grid-template-columns: repeat(2, 1fr);
              }
              .space-y-1 > * + * {
                margin-top: 0.25rem;
              }
              .space-y-3 > * + * {
                margin-top: 0.75rem;
              }
              .list-disc {
                list-style-type: disc;
              }
              .list-inside {
                list-style-position: inside;
              }
              .text-xs {
                font-size: 0.75rem;
              }
              .text-sm {
                font-size: 0.875rem;
              }
              .text-base {
                font-size: 1rem;
              }
              .text-xl {
                font-size: 1.25rem;
              }
              .font-bold {
                font-weight: 700;
              }
              .font-semibold {
                font-weight: 600;
              }
              .italic {
                font-style: italic;
              }
              .text-justify {
                text-align: justify;
              }
              .text-right {
                text-align: right;
              }
              .leading-relaxed {
                line-height: 1.625;
              }
              .border-gray-300 {
                border-color: #d1d5db;
              }
              .border-gray-800 {
                border-color: #1f2937;
              }
              .shadow-md {
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              }
              
              @media print {
                @page {
                  size: A4;
                  margin: 15mm;
                }
                body { 
                  padding: 0;
                  font-size: 10pt;
                  line-height: 1.4;
                }
                h1 { 
                  font-size: 2rem; 
                }
                h2 { 
                  font-size: 1.1rem;
                  margin-top: 0.75rem;
                  margin-bottom: 0.5rem;
                }
                .photo {
                  width: 80px;
                  height: 80px;
                }
                .page-break {
                  page-break-before: always;
                  break-before: page;
                  display: block;
                  height: 0;
                  margin: 0;
                  padding: 0;
                  border: none;
                }
                section {
                  margin-bottom: 1rem;
                }
                .mb-8 {
                  margin-bottom: 1.5rem;
                }
                .mt-8 {
                  margin-top: 0;
                }
                a {
                  color: #2563eb;
                  text-decoration: none;
                }
                /* Prevent orphans */
                p, li {
                  orphans: 3;
                  widows: 3;
                }
              }
            </style>
          </head>
          <body>
            ${document.getElementById('resume-content')?.innerHTML || ''}
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                }, 500);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-foreground/10 h-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge 
                variant="secondary" 
                className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Available for Work
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="block">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Mahbub Alam
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg">
                  Backend and Frontend Developer
                </p>
                
                <p className="text-lg text-muted-foreground/80 max-w-md">
                  Experience across the modern web stack, focused on building scalable web applications and learning DevOps practices.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group relative overflow-hidden px-8 py-6"
                onClick={handleDownloadResume}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/codewithmahbub?tab=projects" target="_blank" rel="noopener noreferrer">
                  View My Work
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/codewithmahbub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/mahbub-alam2006/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                asChild
              >
                <a href="mailto:mahabubalam2690@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1">1.5+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 px-8 py-8 lg:px-0 lg:py-0">
            <div className="relative w-full max-w-xs lg:max-w-none">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-tl from-accent/30 to-primary/10 rounded-full blur-3xl opacity-40 -z-10"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 group mx-auto lg:mx-0">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-4 border-background/50 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Mahbub Alam - Backend and Frontend Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-2xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm whitespace-nowrap">Available for Hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Hidden Resume Component for Print */}
      <div className="hidden">
        <Resume />
      </div>
    </section>
  );
}