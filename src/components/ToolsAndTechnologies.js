import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faGithub, faJs, faReact, faGitlab, faYarn, faNode, faSass, faPhoenixFramework, faNpm, faBootstrap, faAws, faPython, faDocker } from '@fortawesome/free-brands-svg-icons';

function ToolsAndTechnologies() {
    return (
        <div className="isolate bg-white mx-4  mx-4 sm:mx-32 px-6 py-24 sm:py-32 lg:px-8 border-b border-gray-200">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                </div>
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tools & technologies</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 p-2">I am a Full Stack Developer and here are a few tools & technologies I’ve been working with for the the last 9 years.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-12">
                    <div className="software-skill-inline center" name="html-5">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faHtml5} className="mr-2 fa-4x" />
                            <p>html-5</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="faSass">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faSass} className="mr-2 fa-4x" />
                            <p>Sass</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="css3">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faCss3Alt} className="mr-2 fa-4x" />
                            <p>css3</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="faGitlab">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faGitlab} className="mr-2 fa-4x" />
                            <p>Gitlab</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="JavaScript">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faJs} className="mr-2 fa-4x" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="reactjs">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faReact} className="mr-2 fa-4x" />
                            <p>reactjs</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="nodejs">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faNode} className="mr-2 fa-4x" />
                            <p>nodejs</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="npm">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faNpm} className="mr-2 fa-4x" />
                            <p>npm</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="yarn">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faYarn} className="mr-2 fa-4x" />
                            <p>yarn</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="faBootstrap">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faBootstrap} className="mr-2 fa-4x" />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="aws">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faAws} className="mr-2 fa-4x" />
                            <p>aws</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="faPhoenixFramework">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faPhoenixFramework} className="mr-2 fa-4x" />
                            <p>PhoenixFramework</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="python">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faPython} className="mr-2 fa-4x" />
                            <p>python</p>
                        </div>
                    </div>
                    <div className="software-skill-inline center" name="docker">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faDocker} className="mr-2 fa-4x" />
                            <p>docker</p>
                        </div>
                    </div>
                    <div className='software-skill-inline center' name='faGithub'>
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faGithub} className='mr-2 fa-4x' />
                            <p>Github</p>
                        </div>
                    </div>
                    <div className='software-skill-inline center center' name='ruby'>
                        <div className="flex flex-col items-center">
                            <img src="https://rubyonrails.org/assets/images/logo.svg" className='mr-2 fa-4x' />
                            <p>Ruby on Rails</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ToolsAndTechnologies;