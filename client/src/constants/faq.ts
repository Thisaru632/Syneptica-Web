export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What exactly does MOQ mean and why is it important for my order?",
    answer:
      "Minimum Order Quantity (MOQ) is the lowest number of units a supplier is willing to sell. It ensures production efficiency and helps reduce costs for both the supplier and the buyer.",
  },
  {
    question: "How long should I expect my shipment to take once I place an order?",
    answer:
      "Shipping typically takes between 7 to 14 business days depending on your location, the shipping method you select, and any potential customs procedures for international deliveries.",
  },
  {
    question: "Is it possible to customize my order according to my specific requirements?",
    answer:
      "Yes, we offer various customization options for bulk orders, including colors, sizes, and designs. Please contact our support team for detailed assistance.",
  },
  {
    question: "Do you offer international shipping, and how reliable is it?",
    answer:
      "Absolutely! We provide international shipping through trusted logistics partners to ensure your order arrives safely and on time, regardless of your location.",
  },
  {
    question: "What payment methods are accepted for placing orders on your platform?",
    answer:
      "We accept a wide range of payment methods including credit/debit cards, PayPal, and bank transfers. All transactions are securely processed to protect your payment information.",
  },
  {
    question: "What is your return or refund policy if I receive a defective or incorrect product?",
    answer:
      "We have a clear return and refund policy. If you receive a defective or incorrect item, please contact our support team within 14 days of delivery to arrange a replacement or refund.",
  },
];
