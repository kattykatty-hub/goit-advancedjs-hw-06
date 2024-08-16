type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(top: Pick<AllType, T>, bottom: Pick<AllType, T>): AllType {
  return {
    name: (top as any).name || (bottom as any).name || '',
    color: (top as any).color || (bottom as any).color || '',
    position: (top as any).position || (bottom as any).position || 0,
    weight: (top as any).weight || (bottom as any).weight || 0,
  };
}

export {};
