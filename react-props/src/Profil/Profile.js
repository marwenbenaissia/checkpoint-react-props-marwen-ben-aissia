import PropTypes from "prop-types";
import  photo from './avatar.jpg';

const Profile = props =>{
const cardWrapper = {   height: 800,width:'100%',backgroundColor: '#091214',display:'flex'}
const card = { flexBasis: '100%',maxWidth:'50em',border: '1px solid rgb(97, 245, 245)', margin: 'auto',color: '#fff',padding: '1em',backgroundColor: '#0A2129',boxShadow: '0px 0px 3px 1px #12a0a0, inset 0px 0px 3px 1px #12a0a0'}
const profil = { display: 'flex'}
const dp = { flexBasis: '33.3%', position: 'relative', margin: 24,alignSelf:'center'}
const desc = {padding:'1em',fontFamily: 'Orbitron',letterSpacing: '1px'}
const h1= {color:'#07b9b9',textShadow: '0px 0px 2px #3112a0'}
const h2 = {color:'#ecfcfb',textShadow: '0px 0px 4px #12a0a0', maxWidth:'40em' ,textAlign: 'justify'}
const btn = {cursor: 'grab', backgroundColor: '#12a0a0',borderRadius: '3px',textShadow: '0px 0px 2px #3112a0', height: '400px', padding: '10px',fontFamily: 'Orbitron',letterSpacing: '1px', color: '#5a186e', fontSize: '30px'}

const ActionLink = (name) => {
        const handleClick = e => {
          e.preventDefault();
          return( alert(name))
        };
        return (
          <bottom  style = {btn} onClick={handleClick} >
            affiche le nom dans une alert
          </bottom>
        );
       };
       
       return (
        <div style={cardWrapper}>
                <div style={card}>
                
                        <div style={profil}>
                                <div style={dp}>
                                        {props.children}
                                </div>
                                <div  style={desc}>

                                        <h1 style={h1}>Full Name :</h1>
                                        <h2 style={h2} >{props.fullName}</h2>
                                        <div>{ActionLink(props.fullName)}</div>

                                        <h1 style={h1}> Profession :</h1>
                                        <h2 style={h2}> {props.profession}</h2>
                                        
                                </div> 
                                
                        </div>
                        <div style={profil}>
                        <div  style={desc}>
                        <h1 style={h1}>Bio :</h1><h3 style={h2}> {props.bio}</h3>
                        </div> 
                        </div>
                </div>
        </div>
     )
    }
    // default props
    const img = { maxWidth:'80%',borderRadius: '20%',display: 'block',boxShadow: '0px 0px 4px 3px #12a0a0'}
    Profile.defaultProps = {
         fullName: "Foulen ben foulen",
         profession: "indefinie",
         bio:"indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie indefinie",
         children: <img style={img} src={photo} alt="AVATAR"/>
       };
    //  propTypes:
    Profile.propTypes = {
        fullName : PropTypes.string.isRequired ,
        bio: PropTypes.string.isRequired ,
        profession: PropTypes.string.isRequired ,
}
export default Profile;

