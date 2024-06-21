
import type { ITechnologies } from '@interface/home';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import fetching from '@/public/data.json';

interface IProject {
	id: number
	title: string;
	image: string;
	text: string;
	technologies: string[];
	libries: string;
	date: string;
	url: string;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}
const ModalProject = ({ title, image, text, technologies, libries, date, url, setShowModal }: IProject) => {



	const [list, setList] = useState<ITechnologies[]>([])

	useEffect(() => {
		const { data } = fetching;
		const listTechnologies = data?.listTechnologies || [];
		setList(listTechnologies.filter((item) => technologies.includes(item.name)))
	}, []);



	return (
		<>
			<button onClick={() => setShowModal(false)} className='fixed top-0 left-0 w-full h-full bg-secondary/90 z-[99] fadeIn' aria-label='back' />
			<div className='fadeIn fixed z-[999] flex flex-col laptop:justify-center laptop:gap-x-[4rem] laptop:grid laptop:grid-cols-12 gap-10 
							top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[90%] laptop:w-auto max-w-[140rem] px-[2rem] py-[3rem] laptop:py-[5rem] 
							laptop:px-[5rem] rounded-lg  max-h-[90vh] ' >
				<button onClick={() => setShowModal(false)} className='bi bi-x-lg text-[2rem] !font-[700] w-[5rem] h-[5rem] absolute right-0 top-0' aria-label='close' />
				<h2 className='text-[2rem] font-semibold text-center laptop:w-full laptop:text-[2.6rem] laptop:col-span-12'>{title}</h2>
				<picture className='block laptop:h-[100%] w-full rounded-md max-h-[45rem] 
									tablet:overflow-hidden laptop:max-h-[60rem] laptop:col-span-6'>
					<img className='w-full h-full object-cover tablet:object-contain laptop:object-cover laptop:object-center' src={image} alt={title} />
				</picture>
				<section className=' flex flex-col laptop:w-[43rem] laptop:py-0 gap-2 overflow-y-auto py-5 laptop:col-span-6'>
					<h3 className='font-semibold text-[1.7rem] laptop:text-[2rem] mt-2'>Descripción del Proyecto :</h3>
					<p className='text-[1.7rem]'>{text}</p>
					<h3 className='font-semibold text-[1.7rem] laptop:text-[2rem] mt-2'>Detalles del Proyecto</h3>
					<ul className='flex flex-col gap-2 text-[1.7rem]'>
						<li className='truncate'>Librerías : {libries}</li>
						<li>Fecha : {date}</li>
						<li className='truncate'> URL :<a href={url} className='text-green-700 hover:text-green-500 transition-colors' > {url}</a></li>
					</ul>
					<div>
						<h3 className='font-semibold text-[1.7rem] my-2 laptop:text-[2rem]'>Tecnologías : </h3>
						<div className=' flex items-center gap-5'>
							{list.map(({ image, name }, index) =>
								<picture key={index} className='block  w-[3rem] laptop:w-[5rem] laptop:mt-5'>
									<img src={image} className='w-full h-full object-contain' alt={"logo " + name} />
								</picture>)}
						</div>
					</div>
				</section>
			</div>
		</>)
}

export default ModalProject