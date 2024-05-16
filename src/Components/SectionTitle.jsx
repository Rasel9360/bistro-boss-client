const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-10">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <h2 className="text-4xl border-y-2 p-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;