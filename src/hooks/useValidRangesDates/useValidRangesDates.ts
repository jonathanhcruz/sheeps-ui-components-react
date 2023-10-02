import { useEffect, useState } from "react";

import { ValidRangesDatesProps, ValidRangesDatesReturn } from "./models";


export function useValidRangesDates({
    startDate,
    endDate,
    minDate,
    maxDate
}: ValidRangesDatesProps): ValidRangesDatesReturn { 
    const [valid, setValid] = useState<boolean>(false);
    const timeStartDate = startDate?.getTime() ?? 0;
    const timeEndDate: number = endDate?.getTime() ?? 0;
    const timeMinDate: number = minDate?.getTime() ?? 0;
    const timeMaxDate: number = maxDate?.getTime() ?? 0;

    useEffect(() => {
        if (!timeStartDate || !timeEndDate || timeStartDate > timeEndDate) {
            setValid(false);
            return;
        }

        if (timeMinDate && timeMaxDate) {
            setValid(timeStartDate >= timeMinDate && timeEndDate <= timeMaxDate);
            return;
        }

        setValid(true);
   
    }, [startDate, endDate]);

    return {
        startDate: startDate,
        endDate: endDate,
        isValid: valid
    }
}