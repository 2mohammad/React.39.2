const Tweet = ({username, name, date, message }) => {
    return (
        <div>
            <p><b>{name}</b> @{username} {date} </p>
            <p>{message}</p>
        </div>
    )
}