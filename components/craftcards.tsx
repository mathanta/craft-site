import Image from 'next/image'

interface CraftProps {
    image: string;
    title: string;
}

const CraftCard = ({image, title}: CraftProps) =>{
    return (
        <div className="card">
            <Image src={image} alt={`Cover of ${title}`} className="cover" width={100} height={100} />
        </div>
    );
};

export default CraftCard;