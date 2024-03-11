import React from 'react';
import scss from './Button.module.scss';

const ButtonBG = ({ children, text }) => {
	return <button className={`${scss.button} ${scss.bg} ${scss.button22} ${scss.buttonsection} `}>{children} {text}</button>;
};

export default ButtonBG;
