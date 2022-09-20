import React from 'react';
import logo from './logo.svg';
import './App.css';
import s from './Home.module.css'

function App() {
  return (
    <section className={s.container}>
      <h1>Þreyttur á að reyna að láta þér detta í hug matseðill fyrir fjölskylduna, þá ertu kominn á réttan stað</h1>
      <ol>
        <li>byrjaðu á að fara í [vallistann]</li>
        <li>þar veluru þá rétti sem þér getur dottið í hug og skoðað uppskriftir</li>
        <li>smelltu á (fara í þinn matseðill til þess að sjá hvað komið er</li>
        <li>Þar geturu fjarlægt hluti, fylgt inn fjölda sem eru í mat</li>
        <li>Þegar þessu er lokið er smellt á innkaupalista þar sem hægt er að haka við það sem nú þegar er til</li>
        <li>Að því loknu er hægt að fá sent í emailið hjá sér réttina með uppskriftum ásamt því að fá innkaupalista með þeim hlutum sem vantar</li>
      </ol>
    </section>
  );
}

export default App;
