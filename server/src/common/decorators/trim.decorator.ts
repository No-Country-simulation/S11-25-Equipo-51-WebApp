import { Transform, TransformFnParams } from 'class-transformer';

export function Trim() {
  return Transform((params: TransformFnParams) => {
    const value = params.value as unknown;
    if (typeof value === 'string') {
      return value.trim();
    }
    return value;
  });
}
