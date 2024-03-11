import scss from './Section_4.module.scss';
import logo from '../../../assets/images/hydra-tech-1.png';
import logo1 from '../../../assets/images/hydra-tech-2.png';
import logo2 from '../../../assets/images/hydra-tech-3.png';
import logo3 from '../../../assets/images/hydra-tech-4.png';

export const Section_4 = () => {
  return (
    <section className={scss.section4}>
      <div className={scss.container}>
        <img src={logo} alt="logo" />
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
      </div>
    </section>
  )
}
