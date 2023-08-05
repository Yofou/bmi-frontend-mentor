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

export const useGetBmiSuggestion = () => {
    const bmiScore = useGetBmiResult();

    if (bmiScore < 18.5) return 'Underweight';
    if (bmiScore >= 18.5 && bmiScore < 25) return 'Healthy weight';
    if (bmiScore >= 25 && bmiScore < 30) return 'Overweight';
    return 'Obese';
};

export const useGetBmiIdealWeight = () => {
  const height = useBmiStore(store => store.height)
  const heightInMeters = height / 100;

  const min = 18.5 * (heightInMeters * heightInMeters)
  const max = 24.9 * (heightInMeters * heightInMeters)

  return { 
    min: Math.round((min + Number.EPSILON) * 100) / 100,
    max: Math.round((max + Number.EPSILON) * 100) / 100 
  }
}
