import { CategoryButton } from '../category-button';

export const CategoryList = () => {
	return (
		<div>
			<div className='grid grid-cols-4 grid-flow-row content-center gap-x-1 gap-y-4'>
				<CategoryButton />
				<CategoryButton />
				<CategoryButton />
				<CategoryButton />
				<CategoryButton />
				<CategoryButton />
				<CategoryButton />
				<CategoryButton />
			</div>
		</div>
	);
};
