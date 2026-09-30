import SectionHeading from "./SectionHeading"
import Fact from "./Fact"
function AboutSection(){
    return(
        <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title = "About" subtitle = "A little about who I am"/>
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I was born in Toledo City and moved to Minglanilla when I reached 7 years old. Growing up, 
        I had been enjoying playing games on my computer and just tech in general, but as I've grown older,
        I slowly forgot the idea or in-depth interest in it and my life just goes on leading to me taking BS
        Nursing instead which was also due to peer pressure. On my 2nd year of nursing I stopped and shift
        to IT because I realized that it has more job opportunities but aside from it, my love and interest for
        everything about it was reignited.

      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">

      <Fact label ="Course" value ="BS Information Technology"/>
      <Fact label ="Year level" value ="Third year"/>
      <Fact label ="School" value ="CIT-U"/>
      <Fact label ="Based in" value ="Cebu City"/>
      </dl>
    </section>
    )
}

export default AboutSection