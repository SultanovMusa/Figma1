import scss from './Section_6.module.scss';
import logo from '../../../assets/images/Rectangle 24.png';
import Input from '../../ui/inputs/Input';
import ButtonBG from '../../ui/buttons/ButtonBG';

export const Section_6 = () => {
	return (
		<section>
			<div className={scss.container}>
				<img src={logo} alt="logo" />
				<div className={scss.content}>
					<p className={scss.p1}>JOIN HYDRA</p>
					<p className={scss.p2}>Let’s Build Your VR Experience</p>
				</div>
				<div className={scss.inputs1}>
					<Input type="text" color="section6" placeholder="First Name" />
					<Input type="text" color="section6" placeholder="Last Name" />
				</div>
				<div className={scss.inputs2}>
					<Input type="email" color="section6" placeholder="Email" />
					<Input type="number" color="section6" placeholder="Phone Number" />
				</div>
				<div className={scss.inputs3}>
					<Input type="text" color="section6input" placeholder="Subject" />
				</div>
				<div className={scss.inputs4}>
					<Input
						type="text"
						color="section6com"
						placeholder="Tell Us Something..."
					/>
				</div>
				<div className={scss.buttonscss}>
					<ButtonBG text="SEND TO HYDRA" />
				</div>
			</div>
		</section>
	);
};
