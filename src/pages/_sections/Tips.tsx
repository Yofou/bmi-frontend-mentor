export type TipProps = {
    logo: string;
    title: string;
    description: string;
};

export const Tip: React.FC<TipProps> = (props) => {
    return (
        <div className="grid w-full auto-rows-max gap-0 px-[2.4rem] md:grid-cols-[max-content,1fr] lg:grid-cols-1 md:items-center md:gap-x-10 lg:max-w-[23rem] lg:gap-0">
            <img
                className="mb-[2.8rem] h-16 w-16 md:row-start-1 lg:col-auto lg:row-auto md:row-end-3 md:mb-0 lg:mb-[2.8rem]"
                src={props.logo}
                alt=""
            />
            <h2 className="mb-6 text-gunmetal heading-m md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 lg:col-auto lg:row-auto md:mb-0 lg:mb-6">
                {props.title}
            </h2>
            <p className="text-dark-electric-blue body-m">
                {props.description}
            </p>
        </div>
    );
};

export const TipsSection: React.FC = () => {
    return (
        <section className="col-start-1 col-end-4 mb-[6rem] grid w-full justify-center gap-8 pb-24 pt-[4.5rem] [background:linear-gradient(315deg,#D6E6FE_0%,rgba(214,_252,_254,_0.00)_100%)] lg:grid-cols-[repeat(3,minmax(0,386.666px))] xl:mb-[7.5rem]">
            <Tip
                logo="/icon-eating.svg"
                title="Healthy eating"
                description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
            />
            <Tip
                logo="/icon-exercise.svg"
                title="Regular exercise"
                description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
            />
            <Tip
                logo="/icon-sleep.svg"
                title="Adequate sleep"
                description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
            />
        </section>
    );
};
