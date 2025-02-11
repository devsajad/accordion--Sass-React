export default function Item({ question, answer, isOpen, onOpenItem, id }) {
  return (
    <li className="faq__item" onClick={() => onOpenItem(id)}>
      <div className="faq__content">
        <div className={`faq__header ${isOpen ? "active" : ""}`}>
          <p className="faq__question">{question}</p>

          <img
            src="./src/assets/images/icon-arrow-down.svg"
            alt="Arrow icon"
            className="faq__icon"
          />
        </div>

        <p className={`faq__answer ${isOpen ? "open" : ""}`}>{answer}</p>
      </div>
    </li>
  );
}
