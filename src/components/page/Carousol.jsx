import React, { useState } from 'react';
const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="relative">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
                onClick={handlePrev}
            >
                &lt;
            </button>
            <div className="carousel-content">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    >
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <ul className="list-disc pl-6">
                            {item.items.map((text, i) => (
                                <li key={i} className="mb-2">{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                onClick={handleNext}
            >
                &gt;
            </button>
        </div>
    );
};

export default Carousel;