export default function Header() {
  return (
    <section className="image">
      <div className="image__woman-container">
        <img
          src="./src/assets/images/illustration-woman-online-desktop.svg"
          alt="Illustration of a woman"
          className="image__woman"
        />
        <img
          src="./src/assets/images/illustration-woman-online-mobile.svg"
          alt="Illustration of a woman"
          className="image__woman-mobile"
        />
      </div>
      <img
        src="./src/assets/images/illustration-box-desktop.svg"
        alt="illustration of box"
        className="image__box"
      />
    </section>
  );
}
