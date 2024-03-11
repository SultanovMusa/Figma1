import React from 'react';
import scss from './Footer.module.scss';
import logo from '../../../assets/images/Vector 20.png';
import logo1 from '../../../assets/logo.png';
import incon from '../../../assets/images/facebook.png';
import incon1 from '../../../assets/images/twitter.png';
import incon2 from '../../../assets/images/instagram.png';
import incon3 from '../../../assets/images/linkedin.png';
import incon4 from '../../../assets/images/pinterest.png';
import incon5 from '../../../assets/images/youtube.png';
import logo2 from '../../../assets/images/Vector 17.png';
import ButtonBG from '../../ui/buttons/ButtonBG';

const Footer = () => {
	return (
		<>
			<footer className={scss.footer}>
				<div className={scss.padddiv}>
					<div className={scss.displeydiv}>
						<div className={scss.card1}>
							<img className={scss.photoss} src={logo1} alt="logo1" />
						</div>
						<img src={logo} alt="logo" />
						<div className={scss.card2}>
							<p>ABOUT</p>
							<p>SERVICES</p>
							<p>TECHNOLOGIES</p>
							<p>HOW TO</p>
							<p>JOIN HYDRA</p>
						</div>
						<img src={logo} alt="logo" />
						<div className={scss.card2}>
							<p>F.A.Q</p>
							<p>SITEMAP</p>
							<p>CONDITIONS</p>
							<p>LICENSES</p>
						</div>
						<img src={logo} alt="logo" />
						<div className={scss.card3}>
							<p>SOCIALIZE WITH HYDRA</p>
							<div className={scss.inconus}>
								<img src={incon} alt="incon" />
								<img src={incon1} alt="incon1" />
								<img src={incon3} alt="incon3" />
								<img src={incon5} alt="incon5" />
								<img src={incon2} alt="incon2" />
								<img src={incon4} alt="incon4" />
							</div>
							<div className={scss.footerButtons}>
								<ButtonBG text="BUILD YOUR WORLD" />
							</div>
						</div>
					</div>
					<img src={logo2} alt="logo2" />
					<div className={scss.footerContent}>
						<p>
							2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
							RESERVED
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
