import { useState } from "react";

const CountryCodePup = ({
  isCountryVisible,
  toggleCountryPopUp,
  changeCountry,
}) => {
  const allCountries = [
    { name: "United States", code: "1", short: "🇺🇸" },
    { name: "Russia", code: "7", short: "🇷🇺" },
    { name: "Egypt", code: "20", short: "🇪🇬" },
    { name: "South Africa", code: "27", short: "🇿🇦" },
    { name: "Greece", code: "30", short: "🇬🇷" },
    { name: "Netherlands", code: "31", short: "🇳🇱" },
    { name: "Belgium", code: "32", short: "🇧🇪" },
    { name: "France", code: "33", short: "🇫🇷" },
    { name: "Spain", code: "34", short: "🇪🇸" },
    { name: "Hungary", code: "36", short: "🇭🇺" },
    { name: "Italy", code: "39", short: "🇮🇹" },
    { name: "Romania", code: "40", short: "🇷🇴" },
    { name: "Switzerland", code: "41", short: "🇨🇭" },
    { name: "Austria", code: "43", short: "🇦🇹" },
    { name: "United Kingdom", code: "44", short: "🇬🇧" },
    { name: "Denmark", code: "45", short: "🇩🇰" },
    { name: "Sweden", code: "46", short: "🇸🇪" },
    { name: "Norway", code: "47", short: "🇳🇴" },
    { name: "Poland", code: "48", short: "🇵🇱" },
    { name: "Germany", code: "49", short: "🇩🇪" },
    { name: "Peru", code: "51", short: "🇵🇪" },
    { name: "Mexico", code: "52", short: "🇲🇽" },
    { name: "Argentina", code: "54", short: "🇦🇷" },
    { name: "Brazil", code: "55", short: "🇧🇷" },
    { name: "Chile", code: "56", short: "🇨🇱" },
    { name: "Colombia", code: "57", short: "🇨🇴" },
    { name: "Venezuela", code: "58", short: "🇻🇪" },
    { name: "Malaysia", code: "60", short: "🇲🇾" },
    { name: "Australia", code: "61", short: "🇦🇺" },
    { name: "Indonesia", code: "62", short: "🇮🇩" },
    { name: "Philippines", code: "63", short: "🇵🇭" },
    { name: "New Zealand", code: "64", short: "🇳🇿" },
    { name: "Singapore", code: "65", short: "🇸🇬" },
    { name: "Thailand", code: "66", short: "🇹🇭" },
    { name: "Japan", code: "81", short: "🇯🇵" },
    { name: "South Korea", code: "82", short: "🇰🇷" },
    { name: "Vietnam", code: "84", short: "🇻🇳" },
    { name: "China", code: "86", short: "🇨🇳" },
    { name: "Turkey", code: "90", short: "🇹🇷" },
    { name: "India", code: "91", short: "🇮🇳" },
    { name: "Pakistan", code: "92", short: "🇵🇰" },
    { name: "Afghanistan", code: "93", short: "🇦🇫" },
    { name: "Syria", code: "963", short: "🇸🇾" },
    { name: "Sri Lanka", code: "94", short: "🇱🇰" },
    { name: "Myanmar", code: "95", short: "🇲🇲" },
    { name: "Iran", code: "98", short: "🇮🇷" },
    { name: "South Sudan", code: "211", short: "🇸🇸" },
    { name: "Morocco", code: "212", short: "🇲🇦" },
    { name: "Algeria", code: "213", short: "🇩🇿" },
    { name: "Tunisia", code: "216", short: "🇹🇳" },
    { name: "Libya", code: "218", short: "🇱🇾" },
    { name: "Gambia", code: "220", short: "🇬🇲" },
    { name: "Senegal", code: "221", short: "🇸🇳" },
    { name: "Mauritania", code: "222", short: "🇲🇷" },
    { name: "Mali", code: "223", short: "🇲🇱" },
    { name: "Guinea", code: "224", short: "🇬🇳" },
    { name: "Ivory Coast", code: "225", short: "🇨🇮" },
    { name: "Burkina Faso", code: "226", short: "🇧🇫" },
    { name: "Niger", code: "227", short: "🇳🇪" },
    { name: "Togo", code: "228", short: "🇹🇬" },
    { name: "Benin", code: "229", short: "🇧🇯" },
    { name: "Mauritius", code: "230", short: "🇲🇺" },
    { name: "Liberia", code: "231", short: "🇱🇷" },
    { name: "Sierra Leone", code: "232", short: "🇸🇱" },
    { name: "Ghana", code: "233", short: "🇬🇭" },
    { name: "Nigeria", code: "234", short: "🇳🇬" },
    { name: "Chad", code: "235", short: "🇹🇩" },
    { name: "Central African Republic", code: "236", short: "🇨🇫" },
    { name: "Cameroon", code: "237", short: "🇨🇲" },
    { name: "Cape Verde", code: "238", short: "🇨🇻" },
    { name: "São Tomé and Príncipe", code: "239", short: "🇸🇹" },
    { name: "Equatorial Guinea", code: "240", short: "🇬🇶" },
    { name: "Gabon", code: "241", short: "🇬🇦" },
    { name: "Congo - Brazzaville", code: "242", short: "🇨🇬" },
    { name: "Congo - Kinshasa", code: "243", short: "🇨🇩" },
    { name: "Angola", code: "244", short: "🇦🇴" },
    { name: "Guinea-Bissau", code: "245", short: "🇬🇼" },
    { name: "Seychelles", code: "248", short: "🇸🇨" },
    { name: "Rwanda", code: "250", short: "🇷🇼" },
    { name: "Ethiopia", code: "251", short: "🇪🇹" },
    { name: "Somalia", code: "252", short: "🇸🇴" },
    { name: "Djibouti", code: "253", short: "🇩🇯" },
    { name: "Kenya", code: "254", short: "🇰🇪" },
    { name: "Tanzania", code: "255", short: "🇹🇿" },
    { name: "Uganda", code: "256", short: "🇺🇬" },
    { name: "Burundi", code: "257", short: "🇧🇮" },
    { name: "Mozambique", code: "258", short: "🇲🇿" },
    { name: "Zambia", code: "260", short: "🇿🇲" },
    { name: "Madagascar", code: "261", short: "🇲🇬" },
    { name: "Réunion", code: "262", short: "🇷🇪" },
    { name: "Zimbabwe", code: "263", short: "🇿🇼" },
    { name: "Namibia", code: "264", short: "🇳🇦" },
    { name: "Malawi", code: "265", short: "🇲🇼" },
    { name: "Lesotho", code: "266", short: "🇱🇸" },
    { name: "Botswana", code: "267", short: "🇧🇼" },
    { name: "Eswatini", code: "268", short: "🇸🇿" },
    { name: "Comoros", code: "269", short: "🇰🇲" },
    { name: "Eritrea", code: "291", short: "🇪🇷" },
    { name: "Aruba", code: "297", short: "🇦🇼" },
    { name: "Faroe Islands", code: "298", short: "🇫🇴" },
    { name: "Greenland", code: "299", short: "🇬🇱" },
    { name: "Gibraltar", code: "350", short: "🇬🇮" },
    { name: "Portugal", code: "351", short: "🇵🇹" },
    { name: "Luxembourg", code: "352", short: "🇱🇺" },
    { name: "Ireland", code: "353", short: "🇮🇪" },
    { name: "Iceland", code: "354", short: "🇮🇸" },
    { name: "Albania", code: "355", short: "🇦🇱" },
    { name: "Malta", code: "356", short: "🇲🇹" },
    { name: "Cyprus", code: "357", short: "🇨🇾" },
    { name: "Finland", code: "358", short: "🇫🇮" },
    { name: "Bulgaria", code: "359", short: "🇧🇬" },
    { name: "Lithuania", code: "370", short: "🇱🇹" },
    { name: "Latvia", code: "371", short: "🇱🇻" },
    { name: "Estonia", code: "372", short: "🇪🇪" },
    { name: "Moldova", code: "373", short: "🇲🇩" },
    { name: "Armenia", code: "374", short: "🇦🇲" },
    { name: "Belarus", code: "375", short: "🇧🇾" },
    { name: "Andorra", code: "376", short: "🇦🇩" },
    { name: "Monaco", code: "377", short: "🇲🇨" },
    { name: "San Marino", code: "378", short: "🇸🇲" },
    { name: "Ukraine", code: "380", short: "🇺🇦" },
    { name: "Serbia", code: "381", short: "🇷🇸" },
    { name: "Montenegro", code: "382", short: "🇲🇪" },
    { name: "Kosovo", code: "383", short: "🇽🇰" },
    { name: "Croatia", code: "385", short: "🇭🇷" },
    { name: "Slovenia", code: "386", short: "🇸🇮" },
    { name: "Bosnia and Herzegovina", code: "387", short: "🇧🇦" },
    { name: "North Macedonia", code: "389", short: "🇲🇰" },
    { name: "Czech Republic", code: "420", short: "🇨🇿" },
    { name: "Slovakia", code: "421", short: "🇸🇰" },
    { name: "Liechtenstein", code: "423", short: "🇱🇮" },
    { name: "Belize", code: "501", short: "🇧🇿" },
    { name: "Guatemala", code: "502", short: "🇬🇹" },
    { name: "El Salvador", code: "503", short: "🇸🇻" },
    { name: "Honduras", code: "504", short: "🇭🇳" },
    { name: "Nicaragua", code: "505", short: "🇳🇮" },
    { name: "Costa Rica", code: "506", short: "🇨🇷" },
    { name: "Panama", code: "507", short: "🇵🇦" },
    { name: "Saint Pierre and Miquelon", code: "508", short: "🇵🇲" },
    { name: "Haiti", code: "509", short: "🇭🇹" },
    { name: "Guadeloupe", code: "590", short: "🇬🇵" },
    { name: "Bolivia", code: "591", short: "🇧🇴" },
    { name: "Guyana", code: "592", short: "🇬🇾" },
    { name: "Ecuador", code: "593", short: "🇪🇨" },
    { name: "French Guiana", code: "594", short: "🇬🇫" },
    { name: "Paraguay", code: "595", short: "🇵🇾" },
    { name: "Martinique", code: "596", short: "🇲🇶" },
    { name: "Suriname", code: "597", short: "🇸🇷" },
    { name: "Uruguay", code: "598", short: "🇺🇾" },
    { name: "Curaçao", code: "599", short: "🇨🇼" },
    { name: "East Timor", code: "670", short: "🇹🇱" },
    { name: "Brunei", code: "673", short: "🇧🇳" },
    { name: "Papua New Guinea", code: "675", short: "🇵🇬" },
    { name: "Tonga", code: "676", short: "🇹🇴" },
    { name: "Solomon Islands", code: "677", short: "🇸🇧" },
    { name: "Vanuatu", code: "678", short: "🇻🇺" },
    { name: "Fiji", code: "679", short: "🇫🇯" },
    { name: "Palau", code: "680", short: "🇵🇼" },
    { name: "Cook Islands", code: "682", short: "🇨🇰" },
    { name: "Samoa", code: "685", short: "🇼🇸" },
    { name: "Kiribati", code: "686", short: "🇰🇮" },
    { name: "New Caledonia", code: "687", short: "🇳🇨" },
    { name: "French Polynesia", code: "689", short: "🇵🇫" },
    { name: "Hong Kong", code: "852", short: "🇭🇰" },
    { name: "Macau", code: "853", short: "🇲🇴" },
    { name: "Cambodia", code: "855", short: "🇰🇭" },
    { name: "Laos", code: "856", short: "🇱🇦" },
    { name: "Bangladesh", code: "880", short: "🇧🇩" },
    { name: "Taiwan", code: "886", short: "🇹🇼" },
    { name: "Maldives", code: "960", short: "🇲🇻" },
    { name: "Lebanon", code: "961", short: "🇱🇧" },
    { name: "Jordan", code: "962", short: "🇯🇴" },
    { name: "Iraq", code: "964", short: "🇮🇶" },
    { name: "Kuwait", code: "965", short: "🇰🇼" },
    { name: "Saudi Arabia", code: "966", short: "🇸🇦" },
    { name: "Yemen", code: "967", short: "🇾🇪" },
    { name: "Oman", code: "968", short: "🇴🇲" },
    { name: "Palestinian Territories", code: "970", short: "🇵🇸" },
    { name: "United Arab Emirates", code: "971", short: "🇦🇪" },
    { name: "Israel", code: "972", short: "🇮🇱" },
    { name: "Bahrain", code: "973", short: "🇧🇭" },
    { name: "Qatar", code: "974", short: "🇶🇦" },
    { name: "Bhutan", code: "975", short: "🇧🇹" },
    { name: "Mongolia", code: "976", short: "🇲🇳" },
    { name: "Nepal", code: "977", short: "🇳🇵" },
    { name: "Tajikistan", code: "992", short: "🇹🇯" },
    { name: "Turkmenistan", code: "993", short: "🇹🇲" },
    { name: "Azerbaijan", code: "994", short: "🇦🇿" },
    { name: "Georgia", code: "995", short: "🇬🇪" },
    { name: "Kyrgyzstan", code: "996", short: "🇰🇬" },
    { name: "Uzbekistan", code: "998", short: "🇺🇿" },
    { name: "Bahamas", code: "1242", short: "🇧🇸" },
    { name: "Barbados", code: "1246", short: "🇧🇧" },
    { name: "Anguilla", code: "1264", short: "🇦🇮" },
    { name: "Antigua and Barbuda", code: "1268", short: "🇦🇬" },
    { name: "British Virgin Islands", code: "1284", short: "🇻🇬" },
    { name: "U.S. Virgin Islands", code: "1340", short: "🇻🇮" },
    { name: "Cayman Islands", code: "1345", short: "🇰🇾" },
    { name: "Bermuda", code: "1441", short: "🇧🇲" },
    { name: "Grenada", code: "1473", short: "🇬🇩" },
    { name: "Turks and Caicos Islands", code: "1649", short: "🇹🇨" },
    { name: "Montserrat", code: "1664", short: "🇲🇸" },
    { name: "Guam", code: "1671", short: "🇬🇺" },
    { name: "American Samoa", code: "1684", short: "🇦🇸" },
    { name: "Sint Maarten", code: "1721", short: "🇸🇽" },
    { name: "Saint Lucia", code: "1758", short: "🇱🇨" },
    { name: "Dominica", code: "1767", short: "🇩🇲" },
    { name: "Saint Vincent and the Grenadines", code: "1784", short: "🇻🇨" },
    { name: "Puerto Rico", code: "1787", short: "🇵🇷" },
    { name: "Dominican Republic", code: "1809", short: "🇩🇴" },
    { name: "Dominican Republic", code: "1829", short: "🇩🇴" },
    { name: "Dominican Republic", code: "1849", short: "🇩🇴" },
    { name: "Trinidad and Tobago", code: "1868", short: "🇹🇹" },
    { name: "Saint Kitts and Nevis", code: "1869", short: "🇰🇳" },
    { name: "Jamaica", code: "1876", short: "🇯🇲" },

    // Add more languages here
  ];

  const [selectedCountry, setSelectedCountry] = useState("64");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountires, setFilteredCountries] = useState(allCountries);
  if (!isCountryVisible) return null;
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    changeCountry(country);
  };
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredCountries(
      allCountries.filter((country) =>
        country.name.toLowerCase().includes(value)
      )
    );
  };
  return (
    <div>
      <div
        className="van-overlay"
        role="button"
        login-content=""
        style={{ zIndex: "2002" }}
        onClick={toggleCountryPopUp}
      ></div>
      {/* overlay ends */}
      <div
        id="countryModal"
        role="dialog"
        className="van-popup van-popup--round van-popup--bottom overflow-hidden"
        login-content=""
        style={{ zIndex: "2003", height: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          login-content=""
          className=":uno: m-10px h-full flex flex-col overflow-hidden a-t-26"
        >
          <div
            login-content=""
            className=":uno: mx-auto h-40px max-w-720px w-full flex items-center border border-#86909C rounded-12px border-solid px-10px text-slate-500"
          >
            <div login-content="" className="i-ph-magnifying-glass-bold"></div>
            <input
              id="countryInput"
              login-content=""
              className=":uno: input ml-10px flex-1 text-slate-700"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <ul
            id="countryList"
            login-content=""
            className=":uno: mx-auto mt-10px max-w-720px w-full flex-1 overflow-y-auto"
          >
            {filteredCountires.length > 0
              ? filteredCountires.map((country, index) => (
                  <li
                    login-content=""
                    onClick={() => handleCountryClick(country.code)}
                    className={`mb-8px mb-8px flex cursor-pointer items-center border-b border-$text-gray p-8px text-$btn-text text-$text-gray ${
                      selectedCountry === country.code
                        ? "text-[var(--primary)]!"
                        : ""
                    }`}
                    key={index}
                  >
                    <span login-content="" className="mr-4px">
                      {country.name}
                    </span>
                    <span login-content="" className="mr-4px">
                      {country.short}
                    </span>
                    <span login-content="" className="mr-4px">
                      (+{country.code})
                    </span>
                    <div
                      login-content=""
                      className={`i-line-md-confirm-circle-twotone ml-auto text-20px ${
                        selectedCountry === country.code ? "" : "lhideicon"
                      }`}
                    ></div>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryCodePup;
