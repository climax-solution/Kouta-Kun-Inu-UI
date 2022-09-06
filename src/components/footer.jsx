const socials = [
    {
        icon: "twitter",
        href: ""
    },
    {
        icon: "discord",
        href: ""
    },
    {
        icon: "twitch",
        href: ""
    },
    {
        icon: "instagram",
        href: ""
    },
    {
        icon: "linkedin-in",
        href: ""
    },
    {
        icon: "facebook-f",
        href: ""
    },
]

export default function Footer() {
    return (
        <section
            className="footer-container"
        >
            <div className="footer-content text-center">
                <img
                    src="/images/logo/logo.png"
                    alt="footer brand"
                    width="50"
                    height="50"
                />
                <ul className="d-flex gap-3 mt-4 justify-content-center social-group px-0">
                    {
                        socials.map((item, idx) => (
                            <li key={idx}>
                                <a>
                                    <i className={`fab fa-${item.icon}`}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="footer-copyright text-center py-4">
                Kouta-Kun In &copy; 2022 | All Rights Reserved
            </div>
        </section>
    )
}