
const SocialMediaIcons = () => {
    return (
        <div className="flex justufy-center md:justify-start my-10 gap-7" >
            <a 
              className="hover:opacity-50 transition duration-500"
              href="https://www.linkedin.com/in/cinlo-losada-b1b474259/"
              target="blank"
              rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png" width="50%"/>
            </a>

            <a 
              className="hover:opacity-50 transition duration-500"
              href="https://twitter.com"
              target="blank"
              rel="noreferrer"
            >
                <img alt="twitter-link" src="../assets/twitter.png" width="50%"/>
            </a>

            <a 
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/CinLo82"
              target="blank"
              rel="noreferrer"
            >
                <img alt="github-link" src="../assets/github.png" width="50%"/>
            </a>

            <a 
              className="hover:opacity-50 transition duration-500"
              href="https://www.instagram.com/cinlo02/"
              target="blank"
              rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram1.png" width="50%"/>
            </a>
        </div>
    );
}

export default SocialMediaIcons;