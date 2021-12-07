import "./about.css";
import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">A propos de moi</h1>
        <p className="a-sub">Mamadou mbaye wade, Developpeur web et mobile</p>
        <p className="a-desc">
          Sérieux, consciencieux et dynamique, j'ai la volonté de relever de
          nombreux défis. Je suis capable de m'adapter à toutes les situations,
          qu'il s'agisse de travailler en équipe ou en autonomie par exemple.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Je suis prés à mettre à profit les compétences que j'ai pu
              acquérir dans le cadre de ma formation, des stages et des postes
              que j’ai occupés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
