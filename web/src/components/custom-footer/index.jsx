import { Footer } from 'flowbite-react';
import {
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTwitter,
	BsWhatsapp,
} from 'react-icons/bs';

export const CustomFooter = () => {
	return (
		<Footer className='bg-gray-300 rounded-none'>
			<div className='w-full'>
				<div className='grid w-full grid-cols-2 gap-4 px-4 py-4 md:grid-cols-4'>
					<div>
						<Footer.Title title='Perusahaan' className='mb-4' />
						<Footer.LinkGroup col className=''>
							<Footer.Link href='#'>Tentang Kami</Footer.Link>
							<Footer.Link href='#'>Karir</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title='Kontak' className='mb-4' />
						<Footer.LinkGroup col>
							<Footer.Link href='#'>WhatsApp</Footer.Link>
							<Footer.Link href='#'>Instagram</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<div className='w-full bg-gray-700 px-4 py-4 sm:flex sm:items-center sm:justify-between'>
					<Footer.Copyright href='#' by='Birulangit Photography™' year={2024} />
					<div className='mt-4 flex space-x-4 sm:mt-0 sm:justify-center'>
						<Footer.Icon href='#' icon={BsInstagram} />
						<Footer.Icon href='#' icon={BsWhatsapp} />
					</div>
				</div>
			</div>
		</Footer>
	);
};
