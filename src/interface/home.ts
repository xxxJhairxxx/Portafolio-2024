/** @format */

export interface IDataApi {
	data: IData;
}

export interface IData {
	HomeHeader: IHomeHeader;
	HomeAbout: IHomeAbout;
	HomeSpecialities: IHomeSpecialities;
	HomeResume: IHomeResume;
	HomePortfolio: IHomePortfolio;
	Generals: IGenerals;
	Especialities: IEspecialities[];
	Studies: IResume[];
	Experience: IResume[];
	Skills: ISkills[];
	CategoriesProjects: ICategoriesProjects[];
}

export interface IHomeHeader {
	title_up: string;
	title_name: string;
	title_down: string;
}

export interface IHomeAbout {
	title: string;
	subtitle: string;
	text: string;
}

export interface IHomePortfolio{
	title: string;
	subtitle: string;
}

export interface IHomeSpecialities {
	title: string;
	subtitle: string;
}

export interface IHomeResume {
	title: string;
	subtitle: string;
}

export interface IGenerals {
	characteristics: ICharacteristics[];
	infogeneral: IInfogeneral;
	networks: INetworks[];
	navbar: INavbar[];
}

export interface ICharacteristics {
	value: string;
	text: string;
}
export interface IInfogeneral {
	name: string;
	email: string;
	phone: string;
	both_year: string;
	city: string;
	address: string;
}
export interface INetworks {
	type: string;
	url: string;
}
export interface INavbar {
	name: string;
	title: string;
	url: string;
}

export interface IEspecialities {
	title: string;
	text: string;
	icon: string;
}
export interface IResume {
	rangoYear: string;
	title: string;
	subtitle: string;
	text: string;
}
export interface ISkills {
	value: number;
	title: string;
	image: string
}

export interface ICategoriesProjects {
	id:number;
	name: string;
	title: string;
	Proyect: IProject[];
}

export interface IProject {
	id:number
	image: string;
	text: string;
	technologies: string;
	libries: string;
	date: string;
	url: string;
}
