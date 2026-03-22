import React from "react";

import { IAcademics } from "@configs/data-type";
import useDeviceType from "@hooks/useDeviceType";

const EducationCard: React.FC<{ academic: IAcademics }> = ({
  academic: { id, organization, image, degree, year, address },
  ...props
}) => {
  const { isMobile } = useDeviceType();
  return (
    <div className="flex items-start p-2 mt-2 space-x-4 rounded-lg custom-card-bg">
      <div>
        <h6 className="font-bold text-foreground text-start">{organization}</h6>
        <h5 className="text-muted-foreground">{address}</h5>
        <span className="mr-4 text-foreground">{degree}</span>
        {isMobile ? <span className="ml-4 text-muted-foreground whitespace-nowrap">
          {year}
        </span>: null }
        
      </div>
    </div>
  );
};

export default EducationCard;
