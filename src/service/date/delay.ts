export default function delay<TValue>(
  timeout: number,
  value: TValue
): Promise<TValue> {
  return new Promise<TValue>((resolve) => {
    setTimeout(() => {
      resolve(value as any);
    }, timeout);
  });
}
