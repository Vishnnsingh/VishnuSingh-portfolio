import React, { useEffect, useRef } from 'react';


class PointerParticle {
    
    constructor(spread, speed, component) {
        const { ctx, pointer, hue } = component;

        this.ctx = ctx;
        this.x = pointer.x;
        this.y = pointer.y;
        this.mx = pointer.mx * 0.1;
        this.my = pointer.my * 0.1;
        this.size = Math.random() + 1;
        this.decay = 0.01;
        this.speed = speed * 0.08;
        this.spread = spread * this.speed;
        this.spreadX = (Math.random() - 0.5) * this.spread - this.mx;
        this.spreadY = (Math.random() - 0.5) * this.spread - this.my;
        this.color = `hsl(${hue}deg 90% 60%)`;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    collapse() {
        this.size -= this.decay;
    }

    trail() {
        this.x += this.spreadX * this.size;
        this.y += this.spreadY * this.size;
    }

    update() {
        this.draw();
        this.trail();
        this.collapse();
    }
}

const PointerParticles = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const pointerRef = useRef({ x: 0, y: 0, mx: 0, my: 0 });
    const hueRef = useRef(0);
    const fps = 60;
    const msPerFrame = 1000 / fps;
    let timePrevious = performance.now();

    const createParticles = (event, { count, speed, spread }) => {
        setPointerValues(event);

        for (let i = 0; i < count; i++) {
            particlesRef.current.push(
                new PointerParticle(spread, speed, {
                    ctx: canvasRef.current.getContext('2d'),
                    pointer: pointerRef.current,
                    hue: hueRef.current,
                })
            );
        }
    };

    const setPointerValues = (event) => {
        const rect = canvasRef.current.getBoundingClientRect();
        pointerRef.current.x = event.clientX - rect.left;
        pointerRef.current.y = event.clientY - rect.top;
        pointerRef.current.mx = event.movementX;
        pointerRef.current.my = event.movementY;
    };

    const handleParticles = () => {
        particlesRef.current = particlesRef.current.filter((particle) => {
            particle.update();
            return particle.size > 0.1;
        });
    };

    const animateParticles = () => {
        requestAnimationFrame(animateParticles);

        const timeNow = performance.now();
        const timePassed = timeNow - timePrevious;

        if (timePassed < msPerFrame) return;

        const excessTime = timePassed % msPerFrame;
        timePrevious = timeNow - excessTime;

        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        hueRef.current = hueRef.current > 360 ? 0 : (hueRef.current += 3);
        handleParticles();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleClick = (event) => {
            createParticles(event, {
                count: 300,
                speed: Math.random() + 1,
                spread: Math.random() + 50,
            });
        };

        const handleMouseMove = (event) => {
            createParticles(event, {
                count: 20,
                speed: Math.sqrt(event.movementX ** 2 + event.movementY ** 2),
                spread: 1,
            });
        };

        document.addEventListener('click', handleClick);
        document.addEventListener('pointermove', handleMouseMove);

        animateParticles();

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('pointermove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (

        <>
        <div className="fixed  w-full h-full inset-0 -z-10">
            <canvas ref={canvasRef} className="pointer-events-none w-full h-full" />
        </div>
        
        
        </>
    );
    
};

export default PointerParticles;