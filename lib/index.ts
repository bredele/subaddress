export default (email: string): string => {
  const atIndex = email.indexOf("@");
  const localPart = email.substring(0, atIndex);

  const plusIndex = localPart.indexOf("+");
  if (plusIndex === -1) {
    return email;
  }

  const cleanLocalPart = localPart.substring(0, plusIndex);
  return cleanLocalPart + email.substring(atIndex);
}
