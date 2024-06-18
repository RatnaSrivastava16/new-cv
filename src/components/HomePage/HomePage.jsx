
import './HomePage.css';
import githubIcon from  '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
function HomePage(){

    return (
        <div className='homepage_container'>
           
           <div className='homepage_left'>
                <p className='homepage_left_h1'>
                        <span className='red_color'>Hi,</span> my name is
                </p>

                <p className='homepage_left_h2'>
                    Bibek Kundu
                </p>

                <p className='homepage_left_h3'>
                    Pursuing Btech at <span className='red_color'>Lovely Professional University</span>
                </p>

                <p className='homepage_left_description'>
                A dependable person with having critical thinking and time management skill. Using time properly is the key to success that's why making daily to do list help me to save a lot of times and done every work before deadline is the best thing of mine. everyone does hard work also me but my critical thinking skill makes me creative.
                </p>

                <div>
                    <a href='https://www.linkedin.com/in/bibek-kundu/' target='_blank'>
                        <img 
                            src={linkedinIcon}
                            alt='linkedinIconImage'
                            className='homepage_logo'
                        />
                    </a>
                    <a href='https://github.com/BibekKundu05' target='_blank'>
                        <img 
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                    </a>
                </div>

                <a href='mailto:sonaibibek123@gmail.com'>
                    <buton className='homepage_left_button'>Contact</buton>
                </a>
           </div>

           <div className='homepage_right'>
                <img src='https://64.media.tumblr.com/2d0af9c90d1b1107313cc20bda01548a/tumblr_outwxnanpp1u79o2lo1_1280.gifv' alt='GIF' />
           </div>
        </div>
    )
}

export default HomePage;