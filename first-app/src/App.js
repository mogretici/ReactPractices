import './App.css';
// import Header from './components/header';

const name="Muhammed Lütfü";
const surname="ÖĞRETİCİ";
const isLogged=true;


function App() {

  return(
    <>
      {/* <Header />
      <p className='App'> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit hic pariatur eaque. A debitis omnis iure maiores perspiciatis pariatur ad quasi quos quam ullam, officiis repudiandae, corrupti dolorum adipisci.
      </p>
    <label htmlFor="myinput">
      Name
      <input id="myinput" />
       </label> */}
      {/* 
       <h1 >
         {`Merhaba! Benim adım ${name}, soyadım ${surname}`}
       </h1>
       <h4>
         {name} {surname}
       </h4> */}

       <h1>  {isLogged 
       ? `Merhaba! ${name} ${surname}` 
       : `Giriş yapınız.`}  </h1>      
     
    </>
  );

}


export default App;