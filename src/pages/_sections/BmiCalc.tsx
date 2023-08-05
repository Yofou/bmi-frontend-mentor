import { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { RadioGroup, RadioItem } from '../../components/Radio';
import { useBmiStore, useGetBmiIdealWeight, useGetBmiResult, useGetBmiSuggestion } from '../../stores/bmiModule';
import {
    convertFeetToInches,
    convertHeightToImperial,
    convertHeightToMetric,
    convertInchesToFeet,
    convertPoundsToStone,
    convertStoneToPounds,
    convertWeightToImperial,
    convertWeightToMetric,
} from '../../utils/conversion';
import { getDecimalPoints } from '../../utils/decimal';

export const BmiForm = () => {
    const { height, setHeight, weight, setWeight } = useBmiStore(
        (state) => state
    );

    const [isImperial, setIsImperial] = useState(false);
    const score = useGetBmiResult();
    const suggestion = useGetBmiSuggestion()
    const idealWeight = useGetBmiIdealWeight()

    const [heightByFt, setHeightByFt] = useState(0);
    const [heightByIn, setHeightByIn] = useState(0);
    const [weightBySt, setWeightBySt] = useState(0);
    const [weightByLbs, setWeightByLbs] = useState(0);

    useEffect(() => {
        if (isImperial) {
            const cmToFt = convertHeightToImperial(height);

            setHeightByFt(Math.floor(cmToFt));
            setHeightByIn(
                Math.round(convertFeetToInches(getDecimalPoints(cmToFt)))
            );
        }
    }, [isImperial]);

    useEffect(() => {
        if (isImperial) {
            const kgToSts = convertWeightToImperial(weight);

            setWeightBySt(Math.floor(kgToSts));
            setWeightByLbs(
                Math.round(convertStoneToPounds(getDecimalPoints(kgToSts)))
            );
        }
    }, [isImperial]);

    useEffect(() => {
        if (isImperial === false) {
            return;
        }

        const ftToCm = convertHeightToMetric(
            heightByFt + convertInchesToFeet(heightByIn)
        );
        setHeight(Math.round(ftToCm));
    }, [heightByIn, heightByFt, isImperial]);

    useEffect(() => {
        if (isImperial === false) {
            return;
        }

        const stToKg = convertWeightToMetric(
            weightBySt + convertPoundsToStone(weightByLbs)
        );
        setWeight(Math.round(stToKg));
    }, [weightBySt, weightByLbs, isImperial]);

    return (
        <form className="grid w-full auto-rows-max grid-cols-2 gap-8 rounded-2xl bg-pure-white p-6 text-start shadow-blueGlow sm:p-8 xl:absolute xl:left-full xl:top-1/2 xl:max-w-[35rem] xl:-translate-x-1/2 xl:-translate-y-1/2">
            <h3 className="col-span-2 text-gunmetal heading-m">
                Enter your details below
            </h3>

            <RadioGroup
                className="contents"
                value={isImperial}
                setValue={setIsImperial}
            >
                <RadioItem value={false}>Metric</RadioItem>
                <RadioItem value={true}>Imperial</RadioItem>
            </RadioGroup>

            {isImperial === false && (
                <>
                    <Input
                        className="col-span-2 sm:col-span-1"
                        label="Height"
                        value={height}
                        setValue={setHeight}
                        unit="cm"
                        max={272}
                    />
                    <Input
                        className="col-span-2 sm:col-span-1"
                        label="Weight"
                        value={weight}
                        max={635}
                        setValue={setWeight}
                        unit="kg"
                    />
                </>
            )}

            {isImperial === true && (
                <>
                    <div className="col-span-2 grid w-full grid-cols-2 gap-8">
                        <Input
                            label="Height"
                            value={heightByFt}
                            setValue={setHeightByFt}
                            unit="ft"
                            max={272}
                        />
                        <Input
                            className="self-end"
                            value={heightByIn}
                            setValue={setHeightByIn}
                            unit="in"
                            max={11}
                        />
                    </div>

                    <div className="col-span-2 grid w-full grid-cols-2 gap-8">
                        <Input
                            label="Weight"
                            value={weightBySt}
                            setValue={setWeightBySt}
                            unit="st"
                            max={100}
                        />
                        <Input
                            className="self-end"
                            value={weightByLbs}
                            setValue={setWeightByLbs}
                            unit="lbs"
                            max={13}
                        />
                    </div>
                </>
            )}

            <div className="col-span-2 flex w-full flex-col gap-4 rounded-l-2xl rounded-r-2xl md:rounded-r-full p-8 text-pure-white [background:linear-gradient(90deg,#345FF6_0%,#587DFF_100%)]">
                {score === null ? (
                    <>
                        <h4 className="heading-m">Welcome!</h4>
                        <p className="body-s">
                            Enter your height and weight and you’ll see your BMI
                            result here
                        </p>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-pure-white body-m">
                                Your BMI is...
                            </h4>
                            <p className="truncate text-pure-white heading-xl">
                                {score}
                            </p>
                        </div>

                        <p className="self-center body-s">
                            Your BMI suggests you’re a {suggestion}. Your
                            ideal weight is between{' '}
                            <span className="font-bold">
                              {idealWeight.min}kgs - {idealWeight.max}kgs.
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </form>
    );
};

export const BmiCalcSection: React.FC = () => {
    return (
        <section className="w-full">
            <div className="relative flex w-full flex-col items-center rounded-b-[2.1875rem] bg-no-repeat px-10 py-8 text-center [background-image:linear-gradient(315deg,#D6E6FE_0%,rgba(214,252,254,0.00)_100%)] [background-size:100%_40rem] xl:h-[46rem] xl:max-w-[61rem] xl:items-start xl:px-[7.25rem] xl:py-[4.69rem] xl:text-start xl:[background-size:100%_46rem] mb-16">
                <img
                    src="/logo.svg"
                    alt=""
                    className="mb-10 h-10 w-10 xl:mb-[7.94rem]"
                />
                <h2 className="mb-6 max-w-[29.25rem] text-gunmetal heading-xl xl:mb-[2.19rem]">
                    Body Mass Index Calculator
                </h2>
                <p className="mb-10 text-dark-electric-blue body-m xl:mb-0 xl:max-w-[29.0625rem]">
                    Better understand your weight in relation to your height
                    using our body mass index (BM) calculator. While BMI is not
                    the sole determinant of a healthy weight, it offers a
                    valuable starting point to evaluate your overall health and
                    well-being.
                </p>

                <BmiForm />
            </div>
        </section>
    );
};
