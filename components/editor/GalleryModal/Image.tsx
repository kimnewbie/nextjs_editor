import { FC } from 'react';
import NextImage from "next/legacy/image";
import CheckMark from '@/components/common/CheckMark';

interface Props {
    src: string;
    selected?: boolean;
    onClick?(): void;
    alt: string; // 강의에는 없어
}

const Image: FC<Props> = ({ src, selected, onClick, alt = 'gallery' }): JSX.Element => {
    return <div
        onClick={onClick}
        className='rounded overflow-hidden cursor-pointer'
    >
        <NextImage src={src}
            alt={alt}
            width={200}
            height={200}
            objectFit='cover'
            className='bg-secondary-light hover:scale-110 transition' />
        <div className="absolute top-2 left-2">
            <CheckMark visible={selected || false} />
        </div>
    </div>;
};

export default Image;