
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import js from '../../assets/js.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import python from '../../assets/python.png';
import jupyter from '../../assets/jupyter.png';

export default function Experience(){

    const statements = [
        "1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti laborum magni ex repellat aut. Iusto, iste a? Autem praesentium omnis nam eaque mollitia ab ullam iure laborum in laboriosam. Dolore!",
        "2. Inventore repellendus amet assumenda tempora quis, sit neque voluptatem necessitatibus, corporis eveniet hic ut, consequuntur rem distinctio odio maiores autem magnam deserunt! Iste est aperiam culpa hic consequuntur sit cumque? ",
        "3. Doloribus quo error commodi eligendi quasi obcaecati, corrupti laboriosam ea perspiciatis veritatis assumenda tenetur voluptatem laborum possimus veniam ullam rerum reprehenderit fugiat iusto nam. Sapiente illum eum repudiandae dolor corporis? ",
        "4. Porro in natus nihil rem ad dolorem eveniet pariatur veritatis! Sed vitae ipsa temporibus repellat molestiae minus eius facilis voluptatum et expedita, perferendis recusandae, beatae blanditiis pariatur aut ipsam qui.,",
        
    ];
    const statements2 = [
        "1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti laborum magni ex repellat aut. Iusto, iste a? Autem praesentium omnis nam eaque mollitia ab ullam iure laborum in laboriosam. Dolore!",
        "2. Inventore repellendus amet assumenda tempora quis, sit neque voluptatem necessitatibus, corporis eveniet hic ut, consequuntur rem distinctio odio maiores autem magnam deserunt! Iste est aperiam culpa hic consequuntur sit cumque? ",
        "3. Doloribus quo error commodi eligendi quasi obcaecati, corrupti laboriosam ea perspiciatis veritatis assumenda tenetur voluptatem laborum possimus veniam ullam rerum reprehenderit fugiat iusto nam. Sapiente illum eum repudiandae dolor corporis? ",
        "4. Porro in natus nihil rem ad dolorem eveniet pariatur veritatis! Sed vitae ipsa temporibus repellat molestiae minus eius facilis voluptatum et expedita, perferendis recusandae, beatae blanditiis pariatur aut ipsam qui.,",
    ];


    const iconImages = [html, css, js];
    const iconImages1 = [python, jupyter];
    return (
        <div className='experience_container'> 

            <p className='experience_title'>Experience</p>

            <div className='experience_cards_container'>

                <ExperienceCard
                    companyName = "Lovely Professional University"
                    designation = 'Student'
                    statements={statements}
                    iconImages={iconImages}
                
                />
                   <ExperienceCard
                    companyName = "Internshala"
                    designation = 'Intern'
                    statements={statements2}
                    iconImages={iconImages1}
                
                />
            </div>
        </div>
    )
}