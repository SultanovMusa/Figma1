import scss from './Section.module.scss';

import logo from '../../../assets/images/last-photo.png';
import logo1 from '../../../assets/images/chevron-small-down.png';

export const Section_3 = () => {
	return (
		<section className={scss.section3}>
			<div className={scss.container}>
				<img className={scss.img} src={logo} alt="logo" />
				<div className={scss.contents}>
					<p className={scss.p1}>TECHNOLOGIES & HARDWARE</p>
					<p>USED BY HYDRA VR.</p>
				</div>
					<div className={scss.photos}>
						<img src={logo1} alt="logo1" />
					</div>
			</div>
		</section>
	);
};
