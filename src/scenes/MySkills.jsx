import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)")
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32" >
                <motion.div
                     className="md:w-1/3"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.5 }}
                     variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1, x: 0 }
                     }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5" >
                      MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        
                     </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                       <div 
                       className="relative z-0 ml-10 before:absolute before:-top-10 before:-left-20 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                       >
                            <img 
                               alt="skills"
                               className="z-10"
                               src="assets/skills-image.png"
                            />
                       </div>
                   
                    ) : (
                        <img 
                            alt="skills"
                            className="z-10"
                            src="../assets/skills-image.png"
                        />
                    )}
                </div>
             </div>
                {/* SKILL */}
                <div className="md:flex md:justify-between mt-16 gap-32" >
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }} 
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-3xl">Html-Css</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                JavaScript
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                    En cuanto a mis habilidades, tengo experiencia en el desarrollo web utilizando HTML, CSS y JavaScript. También estoy aprendiendo TypeScript para mejorar mi código.
                    </p>
                </motion.div>

                 {/* iNNOVATIVE */}
                 <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }} 
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-3xl">React-Next</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Node-Express
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Trabajo con frameworks como React, Next.js, Node.js y Express.js; y utilizo herramientas como Tailwind, Bootstrap y Figma para crear diseños modernos y responsivos. 
                    </p>
                </motion.div>

                 {/* IMAGINATIVE */}
                 <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }} 
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-3xl">MongoDB</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                MySQL-Posgrest
                            </p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                GitHub
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                    Además, estoy familiarizada en el uso de bases de datos como MongoDB, MySQL y PostgreSQL. <br/>
                    Utilizo GitHub para colaborar en proyectos y mantener un flujo de trabajo eficiente. <br/>
                    Estoy comprometida en aprender y crecer en el desarrollo web, y estoy emocionada por aportar soluciones creativas y de calidad a proyectos emocionantes. <br/>
                    ¡Gracias por tu interés! 
                    </p>
                </motion.div>
                </div>
        </section>
    )
};

export default MySkills;