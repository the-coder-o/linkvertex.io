"use client";
// Fixed imports
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router"; // Fixed import

const MyComponent = () => {
  // References to your section DOM elements
  const mailingListRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // This state will keep track of the active section
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Determine the current section based on scroll position
    let newActiveSection = "";
    if (mailingListRef.current && scrollPosition >= mailingListRef.current.offsetTop) {
      newActiveSection = "mailing-list";
    }
    if (socialLinksRef.current && scrollPosition >= socialLinksRef.current.offsetTop) {
      newActiveSection = "social-links";
    }

    // If the active section has changed, update the state and the URL
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
      // Corrected usage of router.push
      router.push("#" + newActiveSection, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Correct dependency array

  // Removed extraneous semicolon
  return (
    <>
      <head>
        <title>Settings | linkvertex.io</title>
      </head>
      <div>
        <div ref={mailingListRef} id="mailing-list">
          {/* Content for Mailing List Integrations */}
        </div>
        <div ref={socialLinksRef} id="social-links">
          {/* Content for Social Links */}
        </div>
      </div>
    </>
  );
};

export default MyComponent;
