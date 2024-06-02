export function sqlInjection(stringComeFromInput: string): boolean {
  const regex =
    /(['"`])|(`|'|")(''|'|[^']+)|(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|EXEC|--|;|#)/;
  return regex.test(stringComeFromInput);
}
