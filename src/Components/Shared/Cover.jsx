import { Parallax } from 'react-parallax';

const Cover = ({ title, img, subHeading }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className=" p-28 rounded px-56">
                    <div className='text-center bg-black py-32 px-40 text-white rounded space-y-2 bg-opacity-50'>
                        <h2 className="text-4xl font-serif">{title}</h2>
                        <p>{subHeading}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;