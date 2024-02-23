import { Avatar, Dropdown, Navbar } from 'flowbite-react';
export const CustomNavbar = () => {
	return (
		<Navbar fluid className='p-4 shadow-md'>
			<Navbar.Brand href='/' className='w-20'>
				<img
					src='../../../public/logo/logo-hanya-tulisan-hitam.png'
					className='sw-full h-auto scale-125'
					alt='Biulangit Photography Logo'
				/>
			</Navbar.Brand>
			<div className='flex md:order-2'>
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar
							alt='User settings'
							img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
							rounded
						/>
					}
					className='mt-4'
				>
					<Dropdown.Header>
						<span className='block text-sm'>Bonnie Green</span>
						<span className='block truncate text-sm font-medium'>name@flowbite.com</span>
					</Dropdown.Header>
					<Dropdown.Item>Dashboard</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle className='inline-flex items-center p-2 text-sm text-gray-500 hover:bg-none focus:bg-transparent focus:ring-0 dark:text-gray-400 dark:hover:bg-none dark:focus:ring-0 md:hidden' />
			</div>
			<Navbar.Collapse className='min-h-screen  sm:min-h-4'>
				<Navbar.Link href='#'>Beranda</Navbar.Link>
				<Navbar.Link href='#'>Tentang Kami</Navbar.Link>
				<Navbar.Link href='#'>Katalog Harga</Navbar.Link>
				<Navbar.Link href='#'>Kontak</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};
