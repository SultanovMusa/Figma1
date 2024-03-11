import scss from './Section_2.module.scss';
import logo1 from '../../../assets/images/Component 1.png';
import logo2 from '../../../assets/images/man-photo.png';
import ButtonBG from '../../ui/buttons/ButtonBG';
export const Section_2 = () => {
	return (
		<section>
			<div className={scss.containersection2}>
				<div className={scss.container}>
					<div className={scss.content_1}>
						<div className={scss.text1}>
							<p>INTRODUCTION</p>
							<span>TO HYDRA VR</span> <img src={logo1} alt="logo1" />
						</div>
						<div className={scss.text2}>
							<p>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus et. Feugiat
							</p>
							<p>
								nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
								mauris commodo
							</p>
							<p>
								quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit
								amet tellus. Ornare
							</p>
							<p>
								lectus sit amet est placerat in. Lectus magna fringilla urna
								porttitor rhoncus vitae.
							</p>
						</div>
					</div>
					<div className={scss.content_2}>
						<div className={scss.foto}>
							<img className={scss.photo22} src={logo2} alt="logo3" />
						</div>
						<div className={scss.text3}>
							<p className={scss.textP}>ABOUT</p>
							<p className={scss.textP2}>HYDRA VR</p>
							<div>
								<p>
									Eget mi proin sed libero enim sed faucibus turpis. Nisl
									rhoncus mattis rhoncus{' '}
								</p>
								<p>
									urna neque viverra justo. Vivamus at augue eget arcu dictum.
									Ultrices gravida{' '}
								</p>
								<p>
									dictum fusce ut placerat orci. Aenean et tortor at risus
									viverra adipiscing at in.
								</p>
								<p>
									Mattis aliquam faucibus purus in massa. Est placerat in
									egestas erat imperdiet
								</p>
								<p>
									sed. Consequat semper viverra nam libero justo laoreet sit
									amet. Aliquam
								</p>
								<p>
									etiam erat velit scelerisque in dictum non consectetur a.
									Laoreet sit amet
								</p>
								<p>
									cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
									Sem nulla pha
								</p>
								<p>
									retra diam sit amet nisl suscipit adipiscing bibendum. Leo a
									diam sollicitudi <br />n tempor.
								</p>
							</div>
							<div className={scss.buttonsClass}>
								<ButtonBG text="LET’S GET IN TOUCH" />
							</div>
						</div>
					</div>
					<div className={scss.content_3}>
						<div className={scss.text4}>
							<div>
								<p>WHY BUILD</p>
							</div>
							<span>WITH HYDRA?</span> <img src={logo1} alt="logo1" />
						</div>
						<div className={scss.text5}>
							<p>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus et. Feugiat{' '}
							</p>
							<p>
								nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
								mauris commodo
							</p>
							<p>
								quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit
								amet tellus. Ornare
							</p>
							<p>
								lectus sit amet est placerat in. Lectus magna fringilla urna
								porttitor rhoncus vitae.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
