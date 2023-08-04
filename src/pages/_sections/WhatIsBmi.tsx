export const WhatIsBmiSection: React.FC = () => {
    return (
        <section className="relative mb-24 grid grid-cols-1 md:grid-cols-[1fr,2fr] md:justify-center lg:grid-cols-[repeat(2,minmax(0,580px))]">
            <div className="mb-12 md:mb-0">
                <img
                className="static w-auto h-auto md:h-[25.69313rem] lg:w-auto top-0 left-0 lg:h-auto md:absolute md:translate-y-[-4rem] md:translate-x-[-18%] lg:static lg:translate-x-0 lg:translate-y-0"
                    src="/image-man-eating.webp"
                    alt=""
                />
            </div>

            <div className="self-end px-10 md:mb-10 md:ml-[8.2rem] md:max-w-[29rem] md:px-0">
                <h2 className="mb-[2.2rem] text-gunmetal heading-l">
                    What your BMI result means
                </h2>

                <p className="text-dark-electric-blue body-m">
                    A BMI range of 18.5 to 24.9 is considered a 'healthy
                    weight.' Maintaining a healthy weight may lower your chances
                    of experiencing health issues later on, such as obesity and
                    type 2 diabetes. Aim for a nutritious diet with reduced fat
                    and sugar content, incorporating ample fruits and
                    vegetables. Additionally, strive for regular physical
                    activity, ideally about 30 minutes daily for five days a
                    week.
                </p>
            </div>
        </section>
    );
};
