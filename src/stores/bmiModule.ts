import HRNumbers from 'human-readable-numbers';
import { create } from 'zustand';

interface BmiModule {
    height: number;
    weight: number;

    setHeight: (metricValue: number) => void;
    setWeight: (metricValue: number) => void;
}

export const useBmiStore = create<BmiModule>((set) => ({
    // state
    height: 180,
    weight: 80,

    // setters
    setHeight: (metricValue: number) => set({ height: metricValue }),
    setWeight: (metricValue: number) => set({ weight: metricValue }),
}));

// This function always presumes height & weight are in the metric system
export const useGetBmiResult = () => {
    const { weight, height } = useBmiStore((store) => store);
    if (!weight || !height) return null;

    const heightInMeters = height / 100;
    const heightInMetersSquared = heightInMeters * heightInMeters;

    return HRNumbers.toHumanString(weight / heightInMetersSquared);
};
