import { useState } from "react";
import faqData from "../data/data";
import Item from "./item";

export default function FaqList() {
  const [openItem, setOpenItem] = useState(null);

  function handleOpenItem(id) {
    setOpenItem(id);
  }

  return (
    <section className="faq">
      <header className="faq__header">
        <h1 className="faq__title">FAQ</h1>
      </header>

      <ul className="faq__list">
        {faqData.map((item) => (
          <Item
            question={item.question}
            key={item.id}
            isOpen={item.id === openItem ? true : false}
            onOpenItem={handleOpenItem}
            id={item.id}
          >
            {item.answer}
          </Item>
        ))}
      </ul>
    </section>
  );
}
