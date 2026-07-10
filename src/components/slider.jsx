import { useState, useEffect } from "react";
import model1 from '@/assets/img/model/model1.png'
import model2 from '@/assets/img/model/model2.png'
import model3 from '@/assets/img/model/model3.png'
import model4 from '@/assets/img/model/model4.png'

export default function HeroSlider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slider = [
        { img: model1, alt: 'model1' },
        { img: model2, alt: 'model2' },
        { img: model3, alt: 'model3' },
        { img: model4, alt: 'model4' }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slider.length]);

    return (
        <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
            {slider.map((slide, index) => {
                const isActive = currentSlide === index;

                // circular distance nikalo taake wrap-around (last -> first) bhi sahi direction de
                const diff = (index - currentSlide + slider.length) % slider.length;
                const isPrev = diff === slider.length - 1; // ye wahi slide hai jahan se hum abhi move hue hain

                return (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-1000 ease-in-out transform ${
                            isActive
                                ? "opacity-100 translate-x-0 scale-100 z-10"
                                : isPrev
                                    ? "opacity-0 -translate-x-170 scale-[0.8] z-0"  // left side, chota + gaib
                                    : "opacity-0 translate-x-170 scale-[0.8] z-0"   // right side, chota + gaib
                        }`}
                    >
                        <img
                            src={slide.img}
                            alt={slide.alt}
                            className="h-full object-cover object-center"
                        />
                    </div>
                );
            })}
        </div>
    )
}