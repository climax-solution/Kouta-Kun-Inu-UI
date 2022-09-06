const details = [
    {
        title: "Total Supply",
        value: "1B (1,000,000,000)"
    },
    {
        title: "Airdrop",
        value: "2%"
    },
    {
        title: "Presale",
        value: "40% private presale inclusive"
    },
    {
        title: "Burn",
        value: "2%"
    }
];

const taxes = [
    {
        title: "BNB rewards",
        value: "8%"
    },
    {
        title: "Marketing",
        value: "4%"
    },
    {
        title: "Liquidity",
        value: "3%"
    },
    {
        title: "Equates",
        value: "1BNB"
    },
    {
        title: "Private presalers",
        value: "will get 650,000 tokens per bnb"
    },
    {
        title: "Public",
        value: "will be 598,0000 tokens per bnb"
    },
    {
        title: "Pancake",
        value: "will be 520,000 tokens per bnb"
    },
    {
        title: "Early sells first day",
        value: "then drops to 5% steady"
    },
];

export default function Statistics() {
    return (
        <section
            className="statistics-container"
        >
            <div className="container">
                <h4>Statistics</h4>
                <div className="row mx-0">
                    <div className="col-sm-6">
                        <h1>Tokenomics</h1>
                        <ul className="tokenomics">
                            {
                                details.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="token-info-list-item"
                                    >
                                        <span>{item.title}</span><br/>
                                        <span className="text-white fw-bold">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="tokenomics-brand bg-primary-color text-center">
                            <h2>Sale Proceed Allocation</h2>
                            {/* <img/> */}
                        </div>
                    </div>
                </div>
                <h1>Taxes</h1>
                <ul className="tokenomics">
                    {
                        taxes.map((item, idx) => (
                            <li
                                key={idx}
                                className="token-info-list-item"
                            >
                                <span>{item.title}</span><br/>
                                <span className="text-white fw-bold">{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}