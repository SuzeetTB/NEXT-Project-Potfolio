import React from "react";
import { IAcademics } from "../../configs/data-type";

const EducationCard: React.FC<{ academic: IAcademics }> = ({
  academic: { id, organization, image, degree, year, address },
  ...props
}) => {
  return (
    <div className="flex items-center p-2 mt-2 space-x-4 rounded-lg lg:col-span-1 bg-gradient-to-r from-light-400 to-light-300 dark:from-zeit-950 dark:to-zeit-800">
      <div>
        <h6 className="font-bold text-zinc-100 dark:text-zinc-400">
          {organization}
        </h6>
        <p>
          <span className="mr-4 text-white">{degree}</span>
          <span className="ml-4 dark:text-zeit-100">{year}</span>
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
