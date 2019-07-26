import { resolve } from "dns";

export const cancelPromise = promise => {
  let iscanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      value => (iscanceled ? reject({ iscanceled, value }) : resolve(value)),
      error => reject({ iscanceled, erroe }),
    )
  })

  return {
    promise: wrappedPromise,
    cancel: () => (iscanceled = true),
  };
};
