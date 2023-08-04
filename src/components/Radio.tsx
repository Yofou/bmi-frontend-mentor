import { createContext, useContext } from 'react';

type RadioGroup<T> = React.PropsWithChildren<{
    className?: string;

    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
}>;

const RadioContext = createContext<
    [any, React.Dispatch<React.SetStateAction<any>>] | null
>(null);

export const RadioGroup = <T,>(props: RadioGroup<T>) => {
    return (
        <RadioContext.Provider value={[props.value, props.setValue]}>
            <div className={props.className}>{props.children}</div>
        </RadioContext.Provider>
    );
};

type RadioItemProps<T> = React.PropsWithChildren<{
    value: T;
}>;

export const RadioItem = <T,>(props: RadioItemProps<T>) => {
    const contextValue = useContext(RadioContext);
    if (contextValue === null) return <></>;

    const [selected, setSelected] = contextValue;
    const isSelected = props.value === selected;

    const onClick = () => {
        if (setSelected) {
            setSelected(props.value);
        }
    };

    return (
        <label className="flex cursor-pointer flex-row items-center gap-[1.12rem]">
            <button
                type="button"
                className={`grid aspect-square w-[1.9375rem] rounded-full border border-borders transition-colors ${
                    isSelected && 'border-none bg-blue/[0.15]'
                }`}
                onClick={onClick}
            >
                <div
                    className={`aspect-square w-[15px] place-self-center rounded-full bg-blue opacity-0 transition-opacity ${
                        isSelected && '!opacity-100'
                    }`}
                />
            </button>
            <span className="font-bold select-none text-gunmetal body-m">
                {props.children}
            </span>
        </label>
    );
};
