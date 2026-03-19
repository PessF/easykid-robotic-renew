// src/app/utils/scroll.ts
export const smoothScrollTo = (targetId: string) => {
  if (typeof window === "undefined" || !targetId.startsWith("#")) return;

  
  const id = targetId.startsWith("#") ? targetId.substring(1) : targetId;
  const element = document.getElementById(id);

  if (element) {
    
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    
    
    const offset = window.innerWidth < 768 ? 80 : 112; 
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  } else {
    console.warn(`Element with id ${id} not found`);
  }
};