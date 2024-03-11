import ButtonBG from '../../ui/buttons/ButtonBG';
import scss from './Section_1.module.scss';
import logo from '../../../assets/images/arrow-small-right.png';
import Logo from '../../../assets/images/Vector 2.png';
import Logo1 from '../../../assets/images/girl-photo.png';
import Logo2 from '../../../assets/images/Vector 1.png';
import logo3 from '../../../assets/images/Rectangle 6.png';
import logo4 from '../../../assets/images/Vector 5.png';
import logo5 from '../../../assets/images/Page-1.png';
import logo6 from '../../../assets/images/phone-call.png';
import logo7 from '../../../assets/images/mail.png';

export const Section_1 = () => {
	return (
		<section>
			<div className={scss.section_container}>
				<div className={scss.section_paddcontainer}>
					<div className={scss.content}>
						<div className={scss.cont1}>
							<h3>
								Dive <span>Into The Depths</span>
							</h3>
							<h3>
								<span>Of </span>Virtual Reality
							</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
							<p>sed do eiusmod tempor incididunt ut labore et dolore </p>
							<p>nisl tincidunt eget. Lectus mauris eros in vitae .</p>
						</div>
						<div className={scss.cont2}>
							<ButtonBG text="BUILD YOUR WORLD" />
							<img src={logo} alt="logo" />
						</div>
					</div>
					<div className={scss.content2}>
						<img className={scss.img1} src={Logo} alt="Logo" />
						<img className={scss.img2} src={Logo2} alt="Logo2" />
						<div className={scss.logoPhoto}>
							<img src={Logo1} alt="Logo1" />
						</div>
					</div>
				</div>
				<div className={scss.photos}>
					<div>
						<img className={scss.logo41} src={logo4} alt="logo4" />
						<img className={scss.logo42} src={logo4} alt="logo4" />
						<img className={scss.logo5} src={logo5} alt="logo5" />
						<p className={scss.p}>Pay Us a Visit</p>
						<p>Union St, Seattle, WA 98101, United States</p>
						<img className={scss.logo6} src={logo6} alt="logo6" />
						<p className={scss.p2}>Give Us a Call</p>
						<p className={scss.textp}>(110) 1111-1010</p>
						<img className={scss.logo7} src={logo7} alt="logo7" />
						<p className={scss.p3}>Send Us a Message</p>
						<p className={scss.textp2}>Contact@HydraVTech.com</p>
					</div>
					<img src={logo3} alt="logo3" />
				</div>
			</div>
		</section>
	);
};
