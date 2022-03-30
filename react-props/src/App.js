import './App.css';
import Profile from './Profil/Profile';
import  photo from './Profil/marwen.jpg';

function App() {
  const img = { maxWidth:'80%',borderRadius: '20%',display: 'block',boxShadow: '0px 0px 4px 3px #12a0a0'}

  return (
    <div>
      
      <Profile fullName="Marwen Ben Aissia" bio="j”ai  34 ans je suis un ingénieur en informatique j‘ai fait mes études universitaires à l'institute supérieur des etude technologique de nabeul et à l'ecole d'ingénieur en web et multimédia de sfax 
 Actuellement  j”habite à nabeul et je travaille dans le secteur industriel comme développeur web  mais j’ai aussi l'ambition de faire une expérience  à l'internationale pour booster ma carrière professionnelle . 
Originaire du cap bon et de nature joyeuse j’aime tout ce qui est activités de loisir  tel que la  natation le sport le camping et plusieurs autres activités du même genre .
assoiffé d'aventure je suis toujour partant pour faire un voyage et  découvrir des nouvelles 
culture et apprendre de nouvelles choses .
En résumé, je me définie comme un bon vivant.
" profession="Ingénieur en informatique"><img style={img} src={photo} alt="marwen"/></Profile>
      <Profile></Profile> 

        </div>

  );
}

export default App;
