const duration = [1000, 1500, 2000, 2500];

export default function RoadmapItem({ count, list }) {
    return (
        <div
            className="roadmap-item"
            data-aos="fade-up"
            data-aos-duration={duration[count - 1]}
        >
            <div className="roadmap-item-year text-center mb-5">
                <h4>Phase</h4>
                <img
                    src="/images/roadmap/arrow-icon.png"
                    alt="arrow-icon"
                />
            </div>
            <div className="roadmap-item-content bg-primary-color">
                <div className="roadmap-phase-count text-center">{count}</div>
                <ul className="roadmap-item-text">
                    {
                        list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}