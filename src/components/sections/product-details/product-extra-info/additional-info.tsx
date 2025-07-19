import React from "react";

export interface AdditionalInfoProps {
  title: string;
  description: string[];
}

export const AdditionalInfoList: React.FC<{ items: AdditionalInfoProps[] }> = ({
  items,
}) => (
  <>
    {items.map((a) => (
      <div key={a.title}>
        <h4 className="mb-1 text-sm font-semibold">{a.title}</h4>
        <ul className="space-y-1 text-xs text-gray">
          {a.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
);
