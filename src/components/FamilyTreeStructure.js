import React from "react";

const familyData = {
  name: "Raja Raghuvansh Mall",
  children: [
    {
      name: "Raja Ratna Mall",
      children: [
        {
          name: "Raja Ram Mall",
          children: [
            {
              name: "Raja Nipra Mall",
              children: [
                {
                  name: "Raja Harishchandra Mall",
                  children: [
                    {
                      name: "Maharaja Dev Mall",
                      children: [
                        {
                          name: "Raja Prasad Mall",
                          children: [
                            {
                              name: "Maharaja Bheem Mall",
                              children: [
                                {
                                  name: "Raja Narayan Mall",
                                  children: [
                                    {
                                      name: "Raja Roop Mall",
                                      children: [],
                                    },
                                    {
                                      name: "Raja Chatur Mall",
                                      children: [],
                                    },
                                    {
                                      name: "Babu Chattar Shahi",
                                      children: [],
                                    },
                                  ],
                                },
                                {
                                  name: "Babu Ram Shahi",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Raja Madhav Mall (Madhuban Estate)",
                          children: [
                            {
                              name: "Raja Nath Mall",
                              children: [],
                            },
                            {
                              name: "Raja Ajit Mall\n(Raja Fateh Bahadur Mall)",
                              children: [],
                            },
                          ],
                        },
                        {
                          name: "Raja Rai Mall\n(Narharpur Estate)",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Raja Pratap Mall\n(Gonda)",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Raja Roop Mall",
      children: [ ],
    },
  ],
};

function TreeNode({ node }) {
  return (
    <div className="flex flex-col items-center relative">
      {/* Node */}
      <div className="bg-[#f5a873] text-sm font-semibold px-4 py-2 border border-[#f47217] rounded shadow text-white">
        {node.name}
      </div>

      {/* Vertical Line */}
      {node.children && node.children.length > 0 && (
        <>
          <div className="h-5 w-px bg-gray-400"></div>

          {/* Horizontal Connector */}
          <div className="flex justify-center items-start space-x-4 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gray-400 z-0" />
            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center z-10">
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function FamilyTreeStructure() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex justify-center overflow-x-auto">
        <TreeNode node={familyData} />
      </div>
    </div>
  );
}
