import * as React from "react";
import { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.log("You clicked a breadcrumb.");
}

export default function BreadCrumbs() {
  const location = useLocation();
  const [pathName, setPathName] = useState("");

  const capitalizePathName: () => void = () => {
    const pathName = location.pathname.replace("/", "");
    const capitalizeFirstChar =
      pathName.charAt(0).toUpperCase() + pathName.slice(1);

    setPathName(capitalizeFirstChar);
  };

  useEffect(() => {
    capitalizePathName();
  }, [location]);

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          marginBottom: 2,
        }}
      >
        <Link underline="hover" color="inherit">
          Start
        </Link>
        {pathName && (
          <Link underline="hover" color="text.primary" aria-current="page">
            {pathName}
          </Link>
        )}
      </Breadcrumbs>
      <Divider sx={{ marginBottom: 3, opacity: 0.5 }} />
    </div>
  );
}
