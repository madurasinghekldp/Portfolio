'use client';
import React from 'react'
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const achievementList = [
    {
        metric: "Projects",
        value: "2"
    },
    {
        metric: "Skills",
        value: "5"
    },
    {
        metric: "Languages",
        value: "3"
    },
    {
        metric: "Certifications",
        value: "1"
    }
]

function Number({ value}: { value: string }) {
    const { ref, inView } = useInView({ triggerOnce: false });
    const {number} = useSpring({
        from: { number: 0 },
        to: { number: inView ? parseInt(value) : 0 },
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
        reset: true,
    });
    return <animated.div ref={ref}>{number.to((n)=>n.toFixed(0))}</animated.div>
}

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
            {
                achievementList.map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md mb-4">
                        <h3 className="text-2xl font-bold text-white"><Number value={achievement.value}/></h3>
                        <p className="text-gray-400">{achievement.metric}</p>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default AchievementsSection