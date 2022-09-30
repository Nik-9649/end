import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>NextJs</span> + React
      </h1>
      <p className={headerStyles.description}>Next is the future innit?</p>
    </div>
  );
};

export default Header;
