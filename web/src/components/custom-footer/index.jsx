import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export const CustomFooter = () => {
	return (
		<Footer className='bg-gray-300 rounded-none pt-4'>
			<div className='w-full'>
				<div className='w-full px-4 py-4 flex flex-col gap-y-4 items-center'>
					<div>
						<Footer.Title title='Company' />
						<Footer.LinkGroup col>
							<Footer.Link href='#'>About</Footer.Link>
							<Footer.Link href='#'>Careers</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title='contacts center' />
						<Footer.LinkGroup col>
							<Footer.Link href='#'>Instagram</Footer.Link>
							<Footer.Link href='#'>WhatsApp</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<div className='w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between'>
					<Footer.Copyright href='#' by='Flowbite™' year={2022} />
					<div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
						<Footer.Icon href='#' icon={BsFacebook} />
						<Footer.Icon href='#' icon={BsInstagram} />
						<Footer.Icon href='#' icon={BsTwitter} />
						<Footer.Icon href='#' icon={BsGithub} />
						<Footer.Icon href='#' icon={BsDribbble} />
					</div>
				</div>
			</div>
		</Footer>
	);
};
