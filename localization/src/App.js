import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import {useState, useEffect} from 'react'

const message = {
  "tr-TR": {
    title: "Merhaba Dünya",
    desc: "{count} yeni özellik eklendi"
  },
  "en-US": {
    title: "Hello World",
    desc: "{count} new features added"
  }
};
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLang = isLocale ? isLocale: navigator.language;
  const [locale, setLocale] = useState(defaultLang);
  
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={message[locale]}>
       <FormattedMessage id="title"/>
       <br /><br />

       <FormattedMessage id="desc" values={{count:8}} />

       <br /><br />
      <button onClick={()=>setLocale("tr-TR")}>TR</button>
      <button onClick={()=>setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
