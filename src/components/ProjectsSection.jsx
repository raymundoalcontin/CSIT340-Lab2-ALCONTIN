import ProjectCard from "./ProjectCard"

function ProjectsSection(){
    return(
        <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-stone-600">Things I have built.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard 
        year ="2026" 
        title ="Laboratory 3" 
        description ="This consists of the activity that was tasked by the IBM Skillsbuild web." 
        tech ="React · Tailwind CSS"
        link ="https://github.com/raymundoalcontin/CSIT340G5-Lab3-Alcontin.git"/>
        
        <ProjectCard 
        year ="2026" 
        title ="Laboratory 2" 
        description ="My portfolio page and the 2nd laboratory. This is the page you're currently in right now!." 
        tech ="React · Tailwind CSS"
        link ="https://github.com/raymundoalcontin/CSIT340-Lab2-ALCONTIN.git"/>

        <ProjectCard 
        year ="2026" 
        title ="Laboratory 1" 
        description ="My personal page and the 1st laboratory project. It talks about my details." 
        tech ="React · Tailwind CSS"
        link ="https://github.com/raymundoalcontin/CSIT340-Lab1-ALCONTINC.git"/>

        <ProjectCard 
        year ="2026" 
        title ="Hello world" 
        description ="My very first react project ever created." 
        tech ="React"
        link ="https://github.com/raymundoalcontin/CSIT340G5Alcontin.git"/>
       
      </div>
    </section>
    )
}

export default ProjectsSection