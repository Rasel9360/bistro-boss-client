import { FaInstagram } from "react-icons/fa";
import { ImFacebook, ImTwitter } from "react-icons/im";
const Footer = () => {
    return (
        <footer>
            <div className=" text-white flex flex-col md:flex-row">
                <div className="flex-1 bg-[#1F2937] pt-24 pb-20 text-center space-y-1">
                    <h1 className="text-3xl">CONTACT US</h1>
                    <div className="text-lg">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="flex-1 bg-[#111827] text-center space-y-2 pt-24">
                    <h1 className="text-3xl">CONTACT US</h1>
                    <p>Join us on social media</p>
                    <div className="flex justify-center items-center text-3xl gap-4">
                        <ImFacebook/>
                        <FaInstagram />
                        <ImTwitter/>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Bistro Boss Restaurant</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;