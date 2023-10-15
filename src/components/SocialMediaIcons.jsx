import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opactiy-50 transition duration-500"
                href="http://www.linkedin.com/in/michael-liu-776439160"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInIcon />
            </a>

            <a
                className="hover:opactiy-50 transition duration-500"
                href="https://github.com/myCoalSmells"
                target="_blank"
                rel="noreferrer"
            >
                <GitHubIcon />
            </a>

            <a
                className="hover:opactiy-50 transition duration-500"
                href="https://drive.google.com/file/d/1i3We8MAT9ae4J80oTebxdLnu4Sogbpv5/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                <DescriptionIcon />
            </a>

        </div>
    )
}

export default SocialMediaIcons;