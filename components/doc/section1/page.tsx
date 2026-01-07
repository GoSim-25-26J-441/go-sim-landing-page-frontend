import { TriangleAlert } from "lucide-react";

export default function Section1() {
  return <div className="flex justify-center items-center">
    <div className="flex flex-col justify-center gap-8 items-center h-full min-h-100">
    <h1 className="text-white font-xl font-bold">
         Under construction
    </h1>
    <TriangleAlert size={60} />
    </div>
  </div>;
}
