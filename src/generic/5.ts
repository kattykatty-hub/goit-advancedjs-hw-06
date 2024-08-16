interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const numberStringPair: KeyValuePair<number, string> = {
  key: 1,
  value: 'one'
};

const stringBooleanPair: KeyValuePair<string, boolean> = {
  key: 'isActive',
  value: true
};

export {};
