import { useTranslation } from "react-i18next";
import CustomSelectPopup from './customLang';
import "../../assets/css/lang.css";

const Lang = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const options = [
    {
      "value": "en",
      "label": "English"
    },
    {
      "value": "id",
      "label": "Indonesia"
    },
    {
      "value": "vi",
      "label": "Tiếng Việt"
    },
    {
      "value": "ja",
      "label": "日本語"
    },
    {
      "value": "pt",
      "label": "Português"
    },
    {
      "value": "ar",
      "label": "عربي"
    },
    {
      "value": "th",
      "label": "ไทย"
    },
    {
      "value": "es",
      "label": "Español"
    },
    {
      "value": "de",
      "label": "Deutsch"
    },
    {
      "value": "fr",
      "label": "Français"
    },
    {
      "value": "it",
      "label": "Italiano"
    },
    {
      "value": "ko",
      "label": "한국어"
    },
    {
      "value": "tr",
      "label": "Türk"
    },
    {
      "value": "ru",
      "label": "Pусский"
    },
    {
      "value": "fa",
      "label": "فارسی"
    },
    {
      "value": "ms",
      "label": "Melayu"
    },
    {
      "value": "bn",
      "label": "বাংলা"
    },
    {
      "value": "az",
      "label": "Azərbaycan"
    },
    {
      "value": "zh-CN",
      "label": "简体中文"
    },
    {
      "value": "zh-TW",
      "label": "繁體中文"
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <CustomSelectPopup
        options={options}
        onSelect={handleLanguageChange}
        currentLanguage={i18n.language}
      />
    </div>
  );
};

export default Lang;
