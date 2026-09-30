import ProjectCard from "./ProjectCard"

function ProjectsSection(){
    return(
        <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-stone-600">Things I have built.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard 
        year ="2026" 
        title ="About Me in React" 
        description ="My first React project, rebuilt from a plain HTML page." 
        tech ="React · Tailwind CSS"
        link ="View on GitHub"/>
        
        <ProjectCard 
        year ="2025" 
        title ="Canteen Queue" 
        description ="A page that shows how long the canteen line is so students can decide when to go." 
        tech ="HTML · CSS · JavaScript"
        link ="View on GitHub"/>

        <ProjectCard 
        year ="2025" 
        title ="Clinic Records" 
        description ="A desktop app for our database class that keeps visit records for a small clinic." 
        tech ="Java · MySQL"
        link ="View on GitHub"/>

        <ProjectCard 
        year ="2024" 
        title ="Org Event Page" 
        description ="A one-page site for our org's freshman orientation, with the schedule and venue." 
        tech ="HTML · Bootstrap"
        link ="View on GitHub"/>
       
      </div>
    </section>
    )
}

export default ProjectsSection