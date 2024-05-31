import CardTypeChecker from "@/app/components/CardCheck";
import { DataValidation } from "@/app/components/DataValidation";
import { PasswordValidation } from "@/app/components/PasswordValidation";
import { RouteValidation } from "@/app/components/RouteValidation";
import { SqlInjectio } from "@/app/components/sqlInjectio";
import React from "react";

export const RenderExprement = ({
  nameRenderComponent,
}: {
  nameRenderComponent: string;
}) => {
  return (
    <div className="h-full">
      {nameRenderComponent === "passwordValidation" && <PasswordValidation />}
      {nameRenderComponent === "routeValidation" && <RouteValidation />}
      {nameRenderComponent === "dataValidation" && <DataValidation />}
      {nameRenderComponent === "sqlInjection" && <SqlInjectio />}
      {nameRenderComponent === "cardTypeCheck" && <CardTypeChecker />}
    </div>
  );
};
