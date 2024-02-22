import { Carousel } from 'flowbite-react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const LeftButton = () => {
	return (
		<div className='w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center'>
			<FaAngleLeft className='w-5 h-5' />
		</div>
	);
};

const RightButton = () => {
	return (
		<div className='w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center'>
			<FaAngleRight className='w-5 h-5' />
		</div>
	);
};

export const BestProdsCarousel = () => {
	return (
		<div className='px-4 pb-2 h-full flex flex-col gap-y-4'>
			<h2 className='text-xl font-bold text-center'>Paket terpopuler</h2>
			<Carousel
				leftControl={<LeftButton />}
				rightControl={<RightButton />}
				indicators={false}
				pauseOnHover
				className='w-full aspect-square'
			>
				<img
					src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
					className='max-w-full h-auto'
					alt='...'
				/>
				<img
					src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
					className='max-w-full h-auto'
					alt='...'
				/>
				<img
					src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
					className='w-full h-auto'
					alt='...'
				/>
				<img
					src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
					className='w-full h-auto'
					alt='...'
				/>
				<img
					src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
					className='w-full h-auto'
					alt='...'
				/>
			</Carousel>
		</div>
	);
};
