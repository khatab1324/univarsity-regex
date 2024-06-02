import CardTypeChecker from "@/app/components/CardCheck";
import { DataValidation } from "@/app/components/DataValidation";
import { PasswordValidation } from "@/app/components/PasswordValidation";
import HtmlElementExtractor from "@/app/components/htmlElementExtraction";
import SentenceExtractionCount from "@/app/components/sentenceExtractionCount";
import { SqlInjectio } from "@/app/components/sqlInjectio";
import React from "react";

export const RenderExprement = ({
  nameRenderComponent,
}: {
  nameRenderComponent: string;
}) => {
  return (
    <div className="h-full ">
      {nameRenderComponent === "passwordValidation" && <PasswordValidation />}
      {nameRenderComponent === "dataValidation" && <DataValidation />}
      {nameRenderComponent === "sqlInjection" && <SqlInjectio />}
      {nameRenderComponent === "cardTypeCheck" && <CardTypeChecker />}
      {nameRenderComponent === "htmlElementExtraction" && (
        <HtmlElementExtractor />
      )}
      {nameRenderComponent === "sentenceExtractionCount" && (
        <SentenceExtractionCount />
      )}
    </div>
  );
};
