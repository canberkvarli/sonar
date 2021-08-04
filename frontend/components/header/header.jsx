const Header = ({ logout, login, signup, currentUser, ui, errors }) => {
    const root_header = () => (
        <div>
            
        </div>
    )


    const main_content_header = () => (
        <div>

        </div>
    )


    if (currentUser) {
        main_content_header()
    } else {
        root_header()
    };
}

export default Header;