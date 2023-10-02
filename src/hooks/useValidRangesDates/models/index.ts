export interface ValidRangesDatesProps {
    startDate: Date;
    endDate: Date;
    minDate?: Date;
    maxDate?: Date;
}

export interface ValidRangesDatesReturn extends ValidRangesDatesProps {
    isValid: boolean;
}