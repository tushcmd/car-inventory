import Image from 'next/image';

export default function Lambo() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image
                src="/frontend/public/lamborghini.png"
                alt="lamborghini.png"
                layout="fill" // Required when using a parent container
                objectFit="cover" // Ensures the image covers the entire container
            />
        </div>
    )
};