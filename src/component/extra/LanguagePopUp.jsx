import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguagePopUp = ({
  isLanguageVisible,
  toggleLangPopup,
  changeLanguage,
}) => {
  const allLanguages = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "id",
      label: "Indonesia",
    },
    {
      value: "vi",
      label: "Tiếng Việt",
    },
    {
      value: "ja",
      label: "日本語",
    },
    {
      value: "pt",
      label: "Português",
    },
    {
      value: "ar",
      label: "عربي",
    },
    {
      value: "th",
      label: "ไทย",
    },
    {
      value: "es",
      label: "Español",
    },
    {
      value: "de",
      label: "Deutsch",
    },
    {
      value: "fr",
      label: "Français",
    },
    {
      value: "it",
      label: "Italiano",
    },
    {
      value: "ko",
      label: "한국어",
    },
    {
      value: "tr",
      label: "Türk",
    },
    {
      value: "ru",
      label: "Pусский",
    },
    {
      value: "fa",
      label: "فارسی",
    },
    {
      value: "ms",
      label: "Melayu",
    },
    {
      value: "bn",
      label: "বাংলা",
    },
    {
      value: "az",
      label: "Azərbaycan",
    },
    {
      value: "zh-CN",
      label: "简体中文",
    },
    {
      value: "zh-TW",
      label: "繁體中文",
    },
  ];

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Initialize with current language
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(allLanguages);

  if (!isLanguageVisible) return null;

  const handleLanguageClick = (langValue) => {
    setSelectedLanguage(langValue);
    changeLanguage(langValue); // External function if any
    i18n.changeLanguage(langValue); // Change language using i18n
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredLanguages(
      allLanguages.filter((language) =>
        language.label.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div>
      <div
        onClick={toggleLangPopup}
        id="fadeModalBack"
        className="van-overlay"
        role="button"
        style={{ zIndex: "2002" }}
      ></div>
      <div
        id="hideMine"
        role="dialog"
        className="van-popup van-popup--round van-popup--bottom overflow-hidden"
        style={{ zIndex: "2003", height: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className=":uno: m-10px h-full flex flex-col overflow-hidden a-t-26">
          <div className=":uno: mx-auto h-40px max-w-720px w-full flex items-center border border-#86909C rounded-12px border-solid px-10px text-slate-500">
            <div className="i-ph-magnifying-glass-bold"></div>
            <input
              id="languageInput"
              className=":uno: ml-10px flex-1 text-slate-700"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search languages..."
            />
          </div>
          <ul
            id="myList"
            className=":uno: grid grid-cols-3 mx-auto my-10px max-w-720px w-full gap-3 overflow-y-auto pb-3"
          >
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((language, index) => (
                <li
                  key={index}
                  onClick={() => handleLanguageClick(language.value)}
                  className={`flex cursor-pointer items-center rounded-12px bg-#F7F8FA p-8px text-#86909c ${
                    selectedLanguage === language.value
                      ? "text-[var(--primary)]! bg-[var(--primary-light)]"
                      : ""
                  }`}
                >
                  <span>{language.label}</span>
                  <div
                    className={`i-line-md-confirm-circle-twotone ml-auto text-20px ${
                      selectedLanguage === language.value ? "" : "lhideicon"
                    }`}
                  ></div>
                </li>
              ))
            ) : (
              <li>No languages found</li>
            )}
          </ul>
          <div className="current-language">
            Current Language:{" "}
            {allLanguages.find((lang) => lang.value === i18n.language)?.label ||
              "Unknown"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePopUp;
