import React, { useState } from "react";
import MyFoto from "../../../../assets/harvey.jpeg";
import './interactiveImage.style.css';

const InteractiveImage = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0});
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return(
        <div className="items-center justify-center flex p-8 min-h-[450px]">
            <div
                className="group relative w-[400px] h-[500px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.2s ease-out',
                }}
            >
                <div 
                    className='animateBorder absolute inset-0 rounded-lg'
                    style={{
                        padding: '5px',
                    }}
                >
                    <div className="h-full w-full bg-slate-900 rounded-lg p-3 relative">
                        <div className="h-full w-full overflow-hidden rounded-lg">
                        <img 
                            src={MyFoto}
                            alt="Card Image"
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InteractiveImage;