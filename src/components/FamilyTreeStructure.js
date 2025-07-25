"use client"
import LanguageContext from "@/context/languageContext";
import COLORS from "@/utils/color";
import React, { useRef, useEffect, useContext } from "react";

// Recursive TreeNode component
function TreeNode({ node }) {
  return (
    <div className="flex flex-col items-center relative">
      {/* Node box */}

      {node?.isInfinite ? (
        <>
          <div className="h-10 w-px border-l-2 border-dashed border-gray-400 mt-2"></div>
        </>
      ) : (
        <div
          className={`px-4 py-2 rounded shadow
            ${
              node.isKing
                ? "border-2 border-[#FFD700] text-[#FFD700]"
                : "border-2 border-[#f47217] text-[#f5a873]"
            }`}
        >
          <p
            className={`text-sm font-semibold 
            ${node?.isKing ? "text-[#FFD700]" : "text-[#f5a873]"}`}
          >
            {node?.name?.toUpperCase()}
          </p>
          <p
            className={`text-sm font-semibold 
            ${node?.isKing ? "text-[#FFD700]" : "text-[#f5a873]"}`}
          >
            {node?.isExtra}
          </p>
        </div>
      )}

      {/* Children connectors */}
      {node.children && node.children.length > 0 && (
        <>
          {/* Vertical line down from node */}
          <div className="h-5 w-px bg-gray-400"></div>

          {/* Horizontal line and recursive child nodes */}
          <div className="flex justify-center items-start relative">
            {/* Horizontal connector line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gray-400 z-0" />

            {/* Render each child node */}
            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center px-4 z-10">
                <div className="h-5 w-px bg-gray-400"></div>
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Main Family Tree Component
export default function FamilyTreeStructure({ familyData }) {
  const { language } = useContext(LanguageContext);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft =
        containerRef.current.scrollWidth / 2 -
        containerRef.current.clientWidth / 2;
    }
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="inline-block relative mb-5">
          <h2
            className="text-2xl font-semibold font-serif"
            style={{ color: COLORS.primary }}
          >
            {language === "english" ? "GENEALOGY" : "राजवंश वंशावली"}
          </h2>
          <div
            className="absolute left-0 top-8 w-1/2 h-1"
            style={{ backgroundColor: COLORS.secondary }}
          ></div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="min-h-screen p-6 bg-gray-100 overflow-auto my-5 rounded"
      >
        <div className="min-w-max mx-auto">
          <TreeNode node={familyData} />
        </div>
      </div>
    </>
  );
}
