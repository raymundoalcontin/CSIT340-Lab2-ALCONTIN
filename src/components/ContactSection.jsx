import ContactLink from "./ContactLink"

function ContactSection(){
    return(
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-2 text-stone-600">Say hi.</p>
      <ul className="mt-8 space-y-3">

        <ContactLink label ="Email" href="mailto:raymundo.alcontin@cit.edu" text=" raymundo.alcontin@cit.edu"/>

        <ContactLink label ="GitHub" href="https://github.com/raymundoalcontin" text=" github.com/raymundoalcontin"/>

        <ContactLink label ="LinkedIn" href="https://linkedin.com/in/juandelacruz" text=" linkedin.com/in/juandelacruz"/>
      </ul>
    </section>
    )
}
export default ContactSection