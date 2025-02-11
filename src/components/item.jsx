export default function Item({ question, isOpen, onOpenItem, id, children }) {
  return (
    <li className="faq__item" onClick={() => onOpenItem(isOpen ? null : id)}>
      <div className="faq__content">
        <div className={`faq__header ${isOpen ? "active" : ""}`}>
          <p className="faq__question">{question}</p>

          <img
            src="./src/assets/images/icon-arrow-down.svg"
            alt="Arrow icon"
            className="faq__icon"
          />
        </div>

        <p className={`faq__answer ${isOpen ? "open" : ""}`}>{children}</p>
      </div>
    </li>
  );
}
