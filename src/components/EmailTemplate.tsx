// EmailTemplate.tsx
export function EmailTemplate({ subject, message }: { subject: string; message: string }) {
  return (
    <>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>{message}</p>
    </>
  );
}
