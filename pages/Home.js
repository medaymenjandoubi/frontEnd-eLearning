import { useContext } from "react";
import {Context} from "../context";
import Link from "next/link";
import CarouselSlider from "../components/cards/ImageSlider";
const Home = ({ courses }) => {
    const { state,dispatch } = useContext(Context);
    const { user } = state;
    console.log(user)
    const backgroundImageStyle = {
      backgroundImage: `url("/HomePage.png")`, // Chemin relatif vers votre image dans le dossier public
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100vh', // Ajustez la hauteur en fonction de vos besoins
    };
    const textContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Couleur de fond légèrement transparente
        padding: '10px', // Marge intérieure pour l'espacement du texte
    };
    
    const textStyle = {
        color: '#333', // Couleur du texte
    };
    const hoverStyle = {
        backgroundColor: '#888', // Couleur de fond grise au survol
    };
    
    return (
<>
        <h1 className="jumbotron text-center bg-primary">
          Online Education Marketplace
        </h1>
        <CarouselSlider />
        {/*         <div style={backgroundImageStyle}>
                <div className="container">
                    <div className="row">
                    <div className="col text-center">
                        
                    </div>
                    </div>
                </div>
                </div> */}
        <br />


        {/*COMPOSANT 1 */}
    <div
        style={{
            marginTop: '150px',
            borderStyle: 'groove',
            marginLeft: '150px',
            marginRight: "150px",
            borderColor:"black",
            borderRadius:"2px",
            }}
        className="dark-themee-hover"
    >
        <div className="row align-items-center">
            <div className="col" style={{marginLeft:"50px"}}>
                <h4 style={{ textAlign: 'center' }}>
                    Découvrez l'apprentissage rapide, à votre rythme, dans tous les domaines imaginables.
                </h4>
                <h6 style={{ fontWeight: '22px' }}>
                    Rapyd Learn, la plateforme de formation en ligne qui met le savoir à votre portée, que vous souhaitiez devenir
                    instructeur ou que vous cherchiez à enrichir vos connaissances. Nous croyons que chaque individu a une expertise
                    à partager et une soif d'apprendre à satisfaire.
                </h6>
            </div>
            <div className="col text-end">
                <img src="/HomePage1.png" style={{width:"auto", objectFit: 'cover'}}></img>
            </div>
        </div>
    </div>
    {/*COMPOSANT 2 */}
    <div
        style={{
            marginTop: '150px',
            borderStyle: 'groove',
            marginLeft: '150px',
            marginRight: "150px",
            borderColor:"black",
            borderRadius:"2px",
            }}
        className="dark-themee-hover"
    >
        <div className="row ">
            <div className="col text-start" width={"800px"}>
                <img src="/HomePage3.jpg" style={{height:"400px",width:"600px", objectFit: 'cover'}}></img>
            </div>
            <div className="col" style={{marginTop:"70px",marginRight:"50px"}}>
                <h4 style={{ textAlign: 'center' }}>Pour les instructeurs</h4>
                <h6 style={{ fontWeight: '22px' ,marginBottom:"20px"}}>
                    Devenez un mentor, partagez votre passion et monétisez votre expertise. Que vous soyez un expert en technologie,
                    un artiste créatif, un professionnel de la santé, ou que vous ayez une connaissance unique à partager, Rapyd
                    Learn est votre plateforme pour toucher un public mondial.
                </h6>
                <ul class="list-group">
                    <li class="list-group-item">-Créez vos cours en quelques clics.</li>
                    <li class="list-group-item">-Fixez vos prix et gagnez de l'argent en enseignant ce que vous aimez.</li>
                    <li class="list-group-item">-Utilisez nos outils pour suivre votre succès et améliorer vos cours.</li>
                </ul>
            </div>
        </div>
    </div>        


            {/*COMPOSANT 3 */}
            <div
                style={{
                    marginTop: '150px',
                    borderStyle: 'groove',
                    marginLeft: '150px',
                    marginRight: "150px",
                    borderColor:"black",
                    borderRadius:"2px",
                }}
                className="dark-themee-hover"
            >
                <div className="row align-items-center">
                    <div className="col" style={{marginLeft:"50px"}}>
                        <h4 style={{ textAlign: 'center' }}>
                            Pour les apprenants
                        </h4>
                        <h6 style={{ fontWeight: '22px' }}>
                            Explorez des milliers de cours dans divers domaines, de la programmation à la cuisine, en passant par
                            la psychologie et bien plus encore. Notre bibliothèque diversifiée vous offre la flexibilité d'apprendre
                            selon vos besoins et à votre rythme.
                        </h6>
                        <ul class="list-group">
                            <li class="list-group-item">-Accédez à un contenu de haute qualité créé par des experts du monde entier.</li>
                            <li class="list-group-item">-Apprenez à votre rythme, où que vous soyez et sur n'importe quel appareil.</li>
                            <li class="list-group-item">-Trouvez des cours gratuits et payants pour répondre à vos besoins.</li>
                        </ul>
                    </div>
                    <div className="col text-end">
                        <img src="/HomePage2.png" style={{width:"auto", objectFit: 'cover'}}></img>
                    </div>
                </div>
            </div>
            {/* COMPOSANT 4 */}

{user ? <div
  style={{
    marginTop: '150px',
    marginLeft: '150px',
    marginRight: '150px',
    borderColor: 'black',
    borderRadius: '2px',
  }}
  className="dark-themee-hover"
>
  <div className="row align-items-center ">
    <div className="col text-center" style={{ marginLeft: '50px' }}>
      <h4 style={{ textAlign: 'center' }}>
        Vous etes deja l'un des notres {user.name}
      </h4>
      <h6 style={{ fontWeight: '22px' }}>
      "L'apprentissage ne devrait jamais s'arrêter. Avec Rapyd Learn, vous avez accès à une source infinie de connaissances. Continuez à évoluer, à vous perfectionner et à réaliser vos aspirations."
       
      </h6>
      <p style={{ textAlign: 'center' }}>
      Ne Laissez rien vous arretez ,vous etes a deux pas du succes ...
      </p>
      <Link href="/">
        <button className="btn btn-primary mb-3" style={{backgroundColor:"purple", borderColor:"purple"}}>Cherchez de nouveau cours !</button>
      </Link>
    </div>
  </div>
</div>: <div
  style={{
    marginTop: '150px',
    marginLeft: '150px',
    marginRight: '150px',
    borderColor: 'black',
    borderRadius: '2px',
  }}
  className="dark-themee-hover"
>
  <div className="row align-items-center ">
    <div className="col text-center" style={{ marginLeft: '50px' }}>
      <h4 style={{ textAlign: 'center' }}>
        Rejoignez notre communauté
      </h4>
      <h6 style={{ fontWeight: '22px' }}>
        Que vous cherchiez à acquérir de nouvelles compétences pour votre carrière, à explorer des passions
        personnelles ou à approfondir vos connaissances, Rapyd Learn est votre destination éducative.
      </h6>
      <p style={{ textAlign: 'center' }}>
        Rejoignez notre communauté d'apprenants et d'instructeurs passionnés dès aujourd'hui. Le monde est
        votre salle de classe sur Rapyd Learn.
      </p>
      <Link href="/register">
        <button className="btn btn-primary mb-3" style={{backgroundColor:"purple", borderColor:"purple"}} >Commencez dès maintenant !</button>
      </Link>
    </div>
  </div>
</div>}


 <hr style={{fontWeight:"20px"}}/>
</>
      
    );
  };
  
  export default Home;
  