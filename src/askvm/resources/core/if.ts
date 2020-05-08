import { run } from '../../lib';
import { resource } from '../../lib/resource';
import { any, Typed, untyped } from '../../lib/typed';

export const ifRes = resource<Typed<any>>({
  type: any,
  compute(options, code, args) {
    const { params } = code;
    const [condition, thenFun, elseFun] = params!;
    const value = run(options, condition);
    return run(options, untyped(value) ? thenFun : elseFun, []);
  },
});