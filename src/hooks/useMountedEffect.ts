import { useEffect, useRef } from "react";
import type React from "react";

export const useMountedEffect = (
  callback: React.EffectCallback,
  dependencies: React.DependencyList
) => {
  const isInitalMount = useRef(false);
  useEffect(() => {
    if (isInitalMount.current) {
        isInitalMount.current = true;
    } else {
      return callback();
    }
  }, dependencies);
};
