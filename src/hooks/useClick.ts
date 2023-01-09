import { useEffect, useRef } from "react";

type ActionOnPosition = {
  inside?: () => void;
  outside?: () => void;
};

type UseClick = (
  elementId: string,
  isLoaded: boolean,
  actionOnPosition: ActionOnPosition,
  doNotRunAtFirst?: boolean
) => void;
const useClick: UseClick = (elementId, isLoaded, actionOnPosition, doNotRunAtFirst = false) => {
  const firstTimeRef = useRef(false)

  useEffect(() => {
    if (!isLoaded) {
      firstTimeRef.current = true
      return
    };
    const handleClick: EventListener = (e) => {
      if (firstTimeRef.current && doNotRunAtFirst) return firstTimeRef.current = false
      const clickedElement = e.target as HTMLElement;
      const clickedInside = clickedElement.id === elementId ||
      clickedElement.closest(`#${elementId}`)
      if (clickedInside) {
        actionOnPosition.inside?.();
      } else actionOnPosition.outside?.();
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [elementId, isLoaded]);
};

export default useClick;
