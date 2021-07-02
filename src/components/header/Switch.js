import { useState } from "react";
import { useTranslation } from "react-i18next";

const Switch = () => {
  const { t, i18n } = useTranslation();

  const [isChecked, setIsChecked] = useState(true);
  const handleChange = (e) => {
    let lang = e.target.checked ? "en" : "in";
    i18n.changeLanguage(lang);
    setIsChecked((prev) => {
      return !prev;
    });
  };
  return (
    <div className="text-white">
        {t('hindi')}
      <label className="switch mx-2">
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onChange={handleChange}
        />
        <span className="slider"></span>
      </label>
      {t('english')}
    </div>
  );
};

export default Switch;
