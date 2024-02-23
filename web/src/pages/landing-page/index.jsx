import { CustomFooter } from '../../components/custom-footer';
import { CustomNavbar } from '../../components/custom-navbar';
import { BestProdsCarousel } from './components/best-product-carousel';
import { CategoryList } from './components/category-list';

export const LandingPage = () => {
	return (
		<div className='max-w-full min-h-screen flex flex-col flex-wrap gap-y-4'>
			<CustomNavbar />
			<div className='lp-headers py-2 px-4 flex flex-col gap-4'>
				<h1 className='text-xl font-bold text-center'>
					Abadikan Momen,
					<br /> Ciptakan Kenangan
				</h1>
				<CategoryList />
			</div>
			<div className='lp-info py-2 px-4 bg-gray-100'>
				<p className='text-xs text-center'>
					Ada pertanyaan? Hubungi kami di{' '}
					<a href='/' className='text-blue-600 underline'>
						whatsapp
					</a>
				</p>
			</div>
			<div className='w-full h-auto'>
				<BestProdsCarousel />
			</div>
			<div className='w-full'>
				<CustomFooter />
			</div>
		</div>
	);
};
