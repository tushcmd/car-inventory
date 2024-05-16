import Image from 'next/image';

export default function Lambo() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image
                src="/frontend/public/lamborghini.png"
                alt="lamborghini.png"
                layout="fill"
                objectFit="cover" 
            />
        </div>
    )
};