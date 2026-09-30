import TimelineItem from "./TimelineItem"

function ExperienceSection(){
    return(
        <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-2 text-stone-600">Where I have learned and worked.</p>
        <ol className="mt-8 space-y-8 border-l border-stone-200">

            <TimelineItem period="2024 - Present" 
            title="BS Information Technology" 
            place="Cebu Institute of Technology - University" 
            destination ="Taking up web development, databases, and systems analysis."/>

            <TimelineItem period="2022-2023" 
            title="BS Nursing" 
            place="Cebu Institute of Technology - University" 
            destination ="Took up nursing practices, physiology, return demos."/>

            <TimelineItem period="2020 – 2022" 
            title="Senior High School, STEM Strand" 
            place="Cebu Institute of Technology - University" 
            destination ="Online class, super hooked with online games."/>
        </ol>
      </section>
    )
}

export default ExperienceSection