import { useEffect, useRef, useState } from "react";

export default function ExpandableText({
  text,
  className = "",
  buttonClassName = "text-blue-600 hover:text-blue-800 font-medium",
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState("");
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const measureRef = useRef(null);

  useEffect(() => {
    if (!text || !measureRef.current) return;

    const measureElement = measureRef.current;
    const computedStyle = getComputedStyle(measureElement);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const targetHeight = lineHeight * 2.5;

    // Create temporary element to measure text with pre-wrap formatting
    const tempDiv = document.createElement("div");
    tempDiv.style.cssText = computedStyle.cssText;
    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.height = "auto";
    tempDiv.style.width = measureElement.offsetWidth + "px";
    tempDiv.style.whiteSpace = "pre-wrap"; // Preserve formatting like <pre>
    tempDiv.style.wordWrap = "break-word";

    document.body.appendChild(tempDiv);

    // Check if text needs truncation
    tempDiv.textContent = text;
    const fullHeight = tempDiv.scrollHeight;

    if (fullHeight > targetHeight) {
      setNeedsTruncation(true);

      // Binary search to find the right truncation point
      let low = 0;
      let high = text.length;
      let bestFit = "";

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const testText = text.substring(0, mid);

        // Test with the "... See more" button space
        tempDiv.innerHTML =
          testText + '... <span style="color: #2563eb;">See more</span>';

        if (tempDiv.scrollHeight <= targetHeight) {
          bestFit = testText;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      // For pre-formatted text, we should be more careful about word boundaries
      // Only trim to word boundary if it doesn't break formatting significantly
      const lastSpaceIndex = bestFit.lastIndexOf(" ");
      const lastNewlineIndex = bestFit.lastIndexOf("\n");
      
      // Use the later position (space or newline) if it's reasonable
      const cutoffPoint = Math.max(lastSpaceIndex, lastNewlineIndex);
      if (cutoffPoint > bestFit.length * 0.8) {
        bestFit = bestFit.substring(0, cutoffPoint);
      }

      setTruncatedText(bestFit);
    } else {
      setNeedsTruncation(false);
    }

    document.body.removeChild(tempDiv);
  }, [text]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={className}>
      <div
        ref={measureRef}
        className="leading-5"
        style={{ 
          lineHeight: "1.25",
          whiteSpace: "pre-wrap", // Preserve whitespace and line breaks
          wordWrap: "break-word"
        }}
      >
        {!isExpanded && needsTruncation ? (
          <>
            {truncatedText}
            <span className="text-gray-500">... </span>
            <button
              onClick={toggleExpanded}
              className={`${buttonClassName} text-sm inline`}
            >
              See more
            </button>
          </>
        ) : (
          <span style={{ whiteSpace: "pre-wrap" }}>
            {text}
          </span>
        )}
        
        {/* {isExpanded && needsTruncation && (
          <>
            <span className="text-gray-500"> </span>
            <button
              onClick={toggleExpanded}
              className={`${buttonClassName} text-sm inline`}
            >
              See less
            </button>
          </>
        )} */}
      </div>
    </div>
  );
}