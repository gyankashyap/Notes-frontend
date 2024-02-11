import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className="aboutApp m-5">
                <h1 className="text-center my-3">About iNoteBook</h1>
                <hr  className="mb-4"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laboriosam repudiandae alias commodi tempore, debitis eaque at deserunt in non optio quos voluptas aspernatur cumque et quidem vitae! Fugit consectetur culpa, nemo sequi iusto soluta sint recusandae totam voluptatem tempore fuga sapiente iure magni eligendi! Provident aspernatur similique molestiae aperiam, voluptates illo a cupiditate praesentium voluptate expedita reiciendis quo quaerat consequuntur, eligendi repellat fuga? Quis asperiores, alias reiciendis iure nihil sequi culpa, et earum cum dolores ab, tempore doloribus est! Itaque necessitatibus similique mollitia est facilis temporibus accusantium adipisci ea, quia nam nobis ullam nostrum ratione accusamus, atque rerum neque!</p>
            </div>

            <div className="aboutCreator m-5">
                <h1 className="text-center">About the Creator</h1>
                <hr  className="mb-4"/>
                <div className="row ">
                    <div className="col-md-6 text-start modalName">
                        <h2 className="m-1">Gyan Kashyap</h2>
                        <p className="m-1 mb-0">Physics</p>
                        <p className="m-1">IIT ROORKEE</p>
                        <div className=" m-1 social-links">
                            <a href="https://github.com/gyankashyap">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="http://linkedin.com/in/gyan-kashyap">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:gyankashyap56@gmail.com">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="text-justify">
                    <p className="m-2">Hello folks, I belong from Patna, Bihar. I am keenly interested in Data Structures and Algorithms, Competitve Programming, Web Development and Web Design.<br/> I developed this website using HTML, CSS, JavaScript and Bootstrap.<br /></p>
                </div>
            </div>



        </div>
    )
}

export default About;