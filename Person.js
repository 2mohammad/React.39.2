const Person = ({name, age, hobbies}) => {
    let reply = (age > 18 ? "Go vote" : "you must be 18")
    name = name.substring(0,5)
    return (
        <div>
            <p><b>Hi {name} </b></p>
            <p> Can I vote? {reply} </p>
            <ul> {hobbies.map((hobby) => (
                <li>
                    <b>{hobby}</b>
                </li>
                ))}
            </ul>
        </div>
    )
}