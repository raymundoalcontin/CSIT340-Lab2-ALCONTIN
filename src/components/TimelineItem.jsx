function TimelineItem({period, title, place, destination}){
    return(
        <li className="pl-6">
            <p className="text-sm text-stone-500">{period}</p>
            <h3 className="mt-1 font-semibold">{title}</h3>
            <p className="text-sm text-stone-600">{place}</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{destination}</p>
          </li>
    )
}

export default TimelineItem