import { faqs } from "../../data/data";
import SingleFaq from "./SingleFaq";

const FaqsList = () => {
  return (
    <div>
      {faqs.map((faq) => (
        <SingleFaq {...faq} key={faq.id} />
      ))}
    </div>
  );
};

export default FaqsList;
