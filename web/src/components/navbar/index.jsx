import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
	return (
		<div className='w-full px-4 py-2 flex items-center  justify-between drop-shadow-md border-2'>
			<GiHamburgerMenu onClick={() => alert('hi')} />
			<div className='w-20 align-middle'>
				<img
					src='../../../public/logo/logo-hanya-tulisan-hitam.png'
					className='object-cover w-full h-auto scale-150'
				/>
			</div>
		</div>
	);
};
