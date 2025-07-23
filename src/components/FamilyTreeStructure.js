import React, { useRef, useEffect } from "react";

// Recursive TreeNode component
function TreeNode({ node }) {
  return (
    <div className="flex flex-col items-center relative">
      {/* Dashed infinite line if node.isInfinite is true */}
      {node?.isInfinite === true && (
        <div className="h-10 w-px border-l-2 border-dashed border-gray-400 mt-2"></div>
      )}

      {node?.isInfinite === undefined && (
        <>
          {/* Node box */}
          <div
            className={`text-sm font-semibold px-4 py-2 rounded shadow 
            ${
              node.isKing
                ? "bg-[#ffed8a] border border-[#FFD700] text-black"
                : "bg-[#f5a873] border border-[#f47217] text-white"
            }`}
          >
            {node.name}
          </div>

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
                  <div
                    key={index}
                    className="flex flex-col items-center px-4 z-10"
                  >
                    <div className="h-5 w-px bg-gray-400"></div>
                    <TreeNode node={child} />
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

// Main Family Tree Component
export default function FamilyTreeStructure({ familyData }) {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft =
        containerRef.current.scrollWidth / 2 -
        containerRef.current.clientWidth / 2;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen p-6 bg-gray-100 overflow-auto"
    >
      <div className="min-w-max mx-auto">
        <TreeNode node={familyData} />
      </div>
    </div>
  );
}
