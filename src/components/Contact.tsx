
import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import emailJs from "@emailjs/browser";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { Input } from "./index";
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      VITE_EMAIL_SERVICE_ID,
      VITE_EMAIL_TEMPLATE_ID,
      VITE_EMAIL_PUBLIC_KEY,
      VITE_EMAIL_TO_NAME,
      VITE_EMAIL,
    } = import.meta.env;
    setLoading(true);
    emailJs
      .send(
        VITE_EMAIL_SERVICE_ID as string,
        VITE_EMAIL_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: VITE_EMAIL_TO_NAME as string,
          from_email: form.email,
          to_email: VITE_EMAIL as string,
          message: form.message,
        },
        VITE_EMAIL_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          alert(t('contact.success', 'Thank you. I will get back to you as soon as possible.'));
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (e) => {
          setLoading(false);
          console.log(e);
          alert(t('contact.error', 'Something went wrong.'));
        }
      );
  };

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center mt-12 gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="max-w-md w-full bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t('contact.getintouch')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12 "
        >
          <Input
            name="name"
            label={t('contact.name')}
            value={form.name}
            placeholder={t('contact.name')}
            type="text"
            onChange={handleChange}
          />
          <Input
            name="email"
            label={t('contact.email')}
            value={form.email}
            placeholder={t('contact.email')}
            type="email"
            onChange={handleChange}
          />
          <Input
            isTextArea
            name="message"
            label={t('contact.message')}
            value={form.message}
            placeholder={t('contact.message')}
            onChange={handleChange}
          />
          <button className="bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] py-3 px-8 outline-none w-fit text-[#a0d5a0] font-bold shadow-md shadow-primary rounded-xl">
            {loading ? t('contact.sending', 'Sending...') : t('contact.button', 'Send')}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
const ContactSection = SectionWrapper(Contact, "contact");

export default ContactSection;
