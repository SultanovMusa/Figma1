import React from 'react';
import scss from '../Style.module.scss';

import { data } from '../../../data/whyBuildData';
import ButtonBG from '../../ui/buttons/ButtonBG';

const WhyBuild = () => {
	return (
		<section className={scss.why_build}>
			<div className={scss.cards}>
				{data.map((item, index) => (
					<div key={index} className={scss.card}>
						<div className={scss.img}>
							<img src={item.img} alt={item.title} />
						</div>
						<h1>{item.title}</h1>
						<div className={scss.div}>
							<p>{item.text}</p>
						</div>
						<div className={scss.buttons}>
							<ButtonBG className={scss.button22}>TRY IT NOW</ButtonBG>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyBuild;
