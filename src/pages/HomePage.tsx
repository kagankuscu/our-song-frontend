import style from '../styles/HomePage.module.css';
import mainStyle from '../styles/Style.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.welcomeText + ' ' + mainStyle.preventSelect}>
          <span>Welcome to our website</span>
        </div>
      </div>
    </div>
  );
};
