import Image from 'next/image';

export default function Lambo() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image
                src="/lamborghini.png"
                alt="lamborghini.png"
                layout="fill"
                objectFit="cover" 
            />
        </div>
    )
};