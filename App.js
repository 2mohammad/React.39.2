const App = () => {
    return (
        <div>
            <h1>HELLO</h1>
        <FirstComponent />
        <NamedComponent name="Hassan"/>
        <Tweet name="Hassan" username="Hassn247" date="12/24/2020" message="just setting up my twttr"/>
        <Tweet name="Hassan" username="Has7" date="12/2/2020" message="just setting up my twttr"/>
        <Tweet name="Hassan" username="Ha7" date="2/24/2020" message="just setting up my twttr"/>
        <Person name="HarrySign" age={27} hobbies={['walk chickens', 'feed chickens', 'eat chickens']}/>
        <Person name="Larryn" age={7} hobbies={['walk chickens', 'feed chickens', 'eat chickens']}/>
        <Person name="Kathrynas" age={67} hobbies={['walk chickens', 'feed chickens', 'eat chickens']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))