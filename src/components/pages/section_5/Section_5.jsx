import scss from './Section_5.module.scss';
import logo from '../../../assets/images/Component 1.png';
import logo1 from '../../../assets/images/Vector 15.png';
import logo2 from '../../../assets/images/01.png';
import logo3 from '../../../assets/images/02.png';
import logo4 from '../../../assets/images/03.png';
import logo5 from '../../../assets/images/04.png';
import logo6 from '../../../assets/images/arrow-small-right.png';

export const Section_5 = () => {
	return (
		<section>
			<div className={scss.container}>
				<div className={scss.discontent}>
					<div className={scss.content}>
						<p>HOW WE BUILD</p>
						<div className={scss.imgdiv}>
							<span>WITH HYDRA VR?</span>
							<img className={scss.img} src={logo} alt="logo" />
						</div>
					</div>
					<div className={scss.content2}>
						<p>
							Vitae sapien pellentesque habitant morbi tristique senectus et
							netus et. Feugiat
						</p>
						<p>
							nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
							mauris commodo
						</p>
						<p>
							quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
							tellus. Ornare
						</p>
						<p>
							lectus sit amet est placerat in. Lectus magna fringilla urna
							porttitor rhoncus vitae.
						</p>
					</div>
				</div>
				<div className={scss.discontent2}>
					<div className={scss.displey}>
						<img className={scss.photo} src={logo1} alt="logo1" />
						<div className={scss.displeyy}>
							<div className={scss.card1}>
								<div className={scss.div1}>
									<img src={logo2} alt="logo2" />
								</div>
								<img src={logo6} alt="logo6" />
								<p>
									3D Conception <br />& Design
								</p>
							</div>
							<div className={scss.card1}>
								<div className={scss.div1}>
									<img src={logo3} alt="logo3" />
								</div>
								<img src={logo6} alt="logo6" />
								<p>
									Interaction <br />
									Design
								</p>
							</div>
							<div className={scss.card1}>
								<div className={scss.div1}>
									<img src={logo4} alt="logo4" />
								</div>
								<img src={logo6} alt="logo6" />
								<p>
									VR World <br />
									User Testing
								</p>
							</div>
							<div className={scss.card1}>
								<div className={scss.div1}>
									<img src={logo5} alt="logo5" />
								</div>
								<img src={logo6} alt="logo6" />
								<p>
									Hydra VR <br />
									Deploy
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
