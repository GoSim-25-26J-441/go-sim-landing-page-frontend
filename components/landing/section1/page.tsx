"use client";

import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";

export type Section1Props = {
  title: string;
  description?: string;
  card?: card[];
};

type card = {
  title?: string;
  description?: string;
  points?: string[];
};

export default function Section1({ title, description, card }: Section1Props) {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <Title title={title} isUnderline={true} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {card?.map((item, index) => (
          <Card1
            key={index}
            title={item.title}
            description={item.description}
            isUnderline={true}
            points={item.points}
          />
        ))}
      </div>
    </div>
  );
}
