import { Navbar } from '../../components/navbar';
import { CategoryList } from './components/category-list';

export const LandingPage = () => {
	return (
		<div class='max-w-full min-h-svh'>
			<Navbar />
			<div class='lp-headers p-4 flex flex-col gap-4'>
				<h1 class='text-xl font-bold text-center'>
					Abadikan Momen,
					<br /> Ciptakan Kenangan
				</h1>
				<CategoryList />
			</div>
			<div class='lp-info p-2 bg-gray-100'>
				<p class='text-xs text-center'>
					Ada pertanyaan? Hubungi kami di{' '}
					<a href='/' class='text-blue-600 underline'>
						whatsapp
					</a>
				</p>
			</div>
			<div class='lp-body p-4 flex flex-col gap-4'>
				<h1 class='text-xl font-bold text-center'>Paket ter-populer</h1>
			</div>
		</div>
	);
};
