const Header = ({ logout, currentUser }) => {
    const session_links = () => (
        <div>

        </div>
    )


    const personal_greeting = () => (
        <div>

        </div>
    )


    if (currentUser) {
        personal_greeting()
    } else {
        session_links()
    };
}

export default Greeting;