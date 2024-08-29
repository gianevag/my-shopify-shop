import { useRef, useEffect, useCallback } from "react";

export const useInfiniteScroll = (
  targetRef: React.MutableRefObject<HTMLElement | null>,
  options: IntersectionObserverInit,
  getData: () => void
) => {
  // Define a ref to store the IntersectionObserver instance
  const observer = useRef<IntersectionObserver | null>(null);

  // Define a function to handle intersection events
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Check if the target element is intersecting with the viewport
        if (entry.isIntersecting) {
          // Call the provided getData function to fetch more data
          getData();
        }
      });
    },
    [getData]
  );

  // Set up the IntersectionObserver when the component mounts
  useEffect(() => {
    if (targetRef.current) {
      // Create a new IntersectionObserver instance
      observer.current = new IntersectionObserver(handleIntersection, options);
      // Start observing the target element
      observer.current.observe(targetRef.current);
    }

    // Clean up when the component unmounts
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef, handleIntersection, options]);

  // Return the IntersectionObserver instance
  return observer;
};
