function getPromise<T extends (string | number)[]>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise<[string, number]>()
  .then((data) => {
    console.log(data); 
  });

export {};
