type LimitationCardProps = {
    className?: string;

    logo: string;
    title: string;
    description: string;
};

export const LimitationCard: React.FC<LimitationCardProps> = (props) => {
    return (
        <div
            className={`flex flex-col gap-[1.25rem] rounded-2xl bg-pure-white p-6 text-start [box-shadow:16px_32px_56px_0px_rgba(143,174,207,0.25)] sm:max-w-[23rem] ${
                props.className ?? ''
            }`}
        >
            <div className="flex gap-4">
                <img className="h-8 w-8" src={props.logo} alt="" />
                <h3 className="text-gunmetal heading-s">{props.title}</h3>
            </div>
            <p className="text-dark-electric-blue body-m">
                {props.description}
            </p>
        </div>
    );
};

export const LimitationsSection: React.FC = () => {
    return (
        <section className="relative mb-24 pl-[1.2rem] pr-[1.8rem] text-center xl:mb-[35.5rem] xl:text-left">
            <h2 className="mb-8 text-gunmetal heading-l">Limitations of BMI</h2>
            <p className="mx-auto mb-14 max-w-[44rem] text-dark-electric-blue body-m xl:mx-0 xl:max-w-[35.25rem]">
                Although BMI is often a practical indicator of healthy weight,
                it is not suited for every person. Specific groups should
                carefully consider their BMI outcomes, and in certain cases, the
                measurement may not be beneficial to use.
            </p>

            <div className=" flex flex-col justify-center gap-4 sm:grid sm:grid-cols-[repeat(2,minmax(0,23rem))]">
                <LimitationCard
                    className="right-[15rem] top-0 xl:absolute "
                    logo="/icon-gender.svg"
                    title="Gender"
                    description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
                />
                <LimitationCard
                    className="right-[33.56rem] top-[16.5rem] xl:absolute"
                    logo="/icon-age.svg"
                    title="Age"
                    description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
                />
                <LimitationCard
                    className="right-[8.75rem] top-[16.5rem] xl:absolute"
                    logo="/icon-muscle.svg"
                    title="Muscle"
                    description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
                />
                <LimitationCard
                    className="right-[46rem] top-[29.5rem] xl:absolute"
                    logo="/icon-pregnancy.svg"
                    title="Pregnancy"
                    description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
                />
                <LimitationCard
                    className="right-[21.19rem] top-[29.5rem] sm:col-span-2 sm:justify-self-center xl:absolute"
                    logo="/icon-race.svg"
                    title="Race"
                    description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
                />
            </div>
        </section>
    );
};
