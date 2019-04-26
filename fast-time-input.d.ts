declare class Time {
  constructor(hour: number, mins: number);

  to12Hour(): string;
  to24Hour(): string;
}

declare class FastTimeInput {
  parse(timeText: string): string;
  inputFilter(event: KeyboardEvent): boolean;
}
